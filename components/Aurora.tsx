import { useEffect, useRef, useMemo } from "react";
import { Renderer, Program, Mesh, Color, Triangle } from "ogl";

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision mediump float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ),
      0.0
  );
  m = m * m * m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;

  vec3 rampColor;
  float factor = uv.x;

  if (factor <= 0.5) {
    rampColor = mix(uColorStops[0], uColorStops[1], factor * 2.0);
  } else {
    rampColor = mix(uColorStops[1], uColorStops[2], (factor - 0.5) * 2.0);
  }

  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;

  const float midPoint = 0.20;
  float blendHalf = uBlend * 0.5;
  float auroraAlpha = smoothstep(midPoint - blendHalf, midPoint + blendHalf, intensity);

  vec3 auroraColor = intensity * rampColor;

  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;

interface AuroraProps {
  colorStops?: string[];
  amplitude?: number;
  blend?: number;
  time?: number;
  speed?: number;
}

const colorCache = new Map<string, number[]>();

const hexToRgb = (hex: string): number[] => {
  if (colorCache.has(hex)) {
    return colorCache.get(hex)!;
  }
  const c = new Color(hex);
  const rgb = [c.r, c.g, c.b];
  colorCache.set(hex, rgb);
  return rgb;
};

export default function Aurora(props: AuroraProps) {
  const {
    colorStops = ["#5227FF", "#7cff67", "#5227FF"],
    amplitude = 1.0,
    blend = 0.5,
  } = props;
  const propsRef = useRef<AuroraProps>(props);
  propsRef.current = props;

  const ctnDom = useRef<HTMLDivElement>(null);

  const colorStopsArray = useMemo(() => {
    return colorStops.map(hexToRgb);
  }, [colorStops]);

  useEffect(() => {
    const ctn = ctnDom.current;
    if (!ctn) return;

    const initialProps = propsRef.current;
    const initialColorStops = (
      initialProps.colorStops ?? ["#5227FF", "#7cff67", "#5227FF"]
    ).map(hexToRgb);
    const initialAmplitude = initialProps.amplitude ?? 1.0;
    const initialBlend = initialProps.blend ?? 0.5;

    const renderer = new Renderer({
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.canvas.style.backgroundColor = "transparent";

    // Cap device pixel ratio to reduce fragment shader workload
    const maxDpr = 1.5;
    renderer.dpr = Math.min(window.devicePixelRatio || 1, maxDpr);

    const width0 = ctn.offsetWidth;
    const height0 = ctn.offsetHeight;

    const program: Program | undefined = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uAmplitude: { value: initialAmplitude },
        uColorStops: { value: initialColorStops },
        // Use physical pixel resolution to stay consistent with DPR scaling
        uResolution: { value: [width0 * renderer.dpr, height0 * renderer.dpr] },
        uBlend: { value: initialBlend },
      },
    });
    let resizeTimer: NodeJS.Timeout;

    function resize() {
      if (!ctn) return;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const width = ctn.offsetWidth;
        const height = ctn.offsetHeight;
        // Re-apply DPR cap on resize/zoom changes
        renderer.dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
        renderer.setSize(width, height);
        if (program) {
          program.uniforms.uResolution.value = [
            width * renderer.dpr,
            height * renderer.dpr,
          ];
        }
      }, 100);
    }

    window.addEventListener("resize", resize, { passive: true });

    // Observe container size changes (not only window resizes)
    let ro: ResizeObserver | null = null;
    if ("ResizeObserver" in window) {
      ro = new ResizeObserver(() => resize());
      ro.observe(ctn);
    }

    const geometry = new Triangle(gl);
    if (geometry.attributes.uv) {
      delete geometry.attributes.uv;
    }

    const mesh = new Mesh(gl, { geometry, program });
    ctn.appendChild(gl.canvas);

    let animateId = 0;
    let isRunning = false;
    let isVisible = document.visibilityState === "visible";
    let isInViewport = true;

    // Throttle FPS (lower if user prefers reduced motion)
    const prefersReducedMotion =
      typeof window !== "undefined" && "matchMedia" in window
        ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
        : false;
    const targetFps = prefersReducedMotion ? 15 : 30;
    const frameInterval = 1000 / targetFps;
    let lastFrameTime = 0;

    let lastColorStops = initialProps.colorStops ?? [
      "#5227FF",
      "#7cff67",
      "#5227FF",
    ];
    let cachedColorArray = lastColorStops.map(hexToRgb);

    const update = (t: number) => {
      if (!isRunning) return;

      const now = performance.now();
      if (now - lastFrameTime < frameInterval) {
        animateId = requestAnimationFrame(update);
        return;
      }
      lastFrameTime = now;

      const currentProps = propsRef.current;
      const { time = t * 0.01, speed = 1.0 } = currentProps;

      if (program) {
        program.uniforms.uTime.value = time * speed * 0.1;

        const currentAmplitude = currentProps.amplitude ?? 1.0;
        if (program.uniforms.uAmplitude.value !== currentAmplitude) {
          program.uniforms.uAmplitude.value = currentAmplitude;
        }

        const currentBlend = currentProps.blend ?? 0.5;
        if (program.uniforms.uBlend.value !== currentBlend) {
          program.uniforms.uBlend.value = currentBlend;
        }

        const currentStops = currentProps.colorStops ?? lastColorStops;
        if (currentStops !== lastColorStops) {
          lastColorStops = currentStops;
          cachedColorArray = currentStops.map(hexToRgb);
          program.uniforms.uColorStops.value = cachedColorArray;
        }

        renderer.render({ scene: mesh });
      }

      animateId = requestAnimationFrame(update);
    };

    function start() {
      if (isRunning) return;
      isRunning = true;
      animateId = requestAnimationFrame(update);
    }

    function stop() {
      if (!isRunning) return;
      isRunning = false;
      cancelAnimationFrame(animateId);
    }

    function reevaluateRun() {
      if (isVisible && isInViewport) start();
      else stop();
    }

    const onVisibilityChange = () => {
      isVisible = document.visibilityState === "visible";
      reevaluateRun();
    };
    document.addEventListener("visibilitychange", onVisibilityChange, {
      passive: true,
    } as EventListenerOptions);

    const io = new IntersectionObserver(
      ([entry]) => {
        isInViewport = !!entry?.isIntersecting;
        reevaluateRun();
      },
      { root: null, threshold: 0.01 }
    );
    io.observe(ctn);

    resize();
    // Start if visible; observers will stop it if offscreen
    start();

    return () => {
      stop();
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", resize);
      document.removeEventListener(
        "visibilitychange",
        onVisibilityChange as any
      );
      io.disconnect();
      ro?.disconnect();
      if (ctn && gl.canvas.parentNode === ctn) {
        ctn.removeChild(gl.canvas);
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return (
    <div
      ref={ctnDom}
      className="w-full h-full"
      style={{ willChange: "transform" }}
    />
  );
}
