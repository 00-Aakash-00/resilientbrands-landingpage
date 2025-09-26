interface GrainGradientLiteProps {
  colors?: string[];
  colorBack?: string;
  angle?: number;
  softness?: number;
  intensity?: number;
  noise?: number;
  className?: string;
  style?: React.CSSProperties;
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export default function GrainGradientLite(props: GrainGradientLiteProps) {
  const {
    colors = [
      "hsl(270, 100%, 45%)",
      "hsl(185, 90%, 50%)",
      "hsl(280, 95%, 55%)",
    ],
    colorBack = "hsl(240, 10%, 3%)",
    angle = 135,
    softness = 0.85,
    intensity = 0.7,
    noise = 0.3,
    className,
    style,
  } = props;

  const color1 = colors[0] ?? colorBack;
  const color2 = colors[1] ?? color1;
  const color3 = colors[2] ?? color2;

  const intensityPct = Math.round(clamp(intensity, 0, 1) * 80 + 10); // 10%..90%
  const softnessStop = Math.round(60 + (1 - clamp(softness, 0, 1)) * 25); // 60%..85%
  const noiseOpacity = clamp(noise, 0, 1) * 0.18; // subtle grain

  const vars: React.CSSProperties & Record<string, string> = {
    "--c1": color1,
    "--c2": color2,
    "--c3": color3,
    "--angle": `${angle}deg`,
  };

  const gradientBackground = {
    backgroundColor: colorBack,
    backgroundImage: [
      `radial-gradient(120% 80% at 0% 0%, color-mix(in oklab, var(--c1) ${intensityPct}%, transparent) 0%, transparent ${softnessStop}%)`,
      `radial-gradient(120% 80% at 100% 0%, color-mix(in oklab, var(--c2) ${intensityPct}%, transparent) 0%, transparent ${softnessStop}%)`,
      `radial-gradient(140% 100% at 100% 100%, color-mix(in oklab, var(--c3) ${intensityPct}%, transparent) 0%, transparent ${softnessStop}%)`,
      `linear-gradient(var(--angle), color-mix(in oklab, var(--c1) 40%, var(--c2) 60%), var(--c3))`,
    ].join(","),
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  } as React.CSSProperties;

  const noiseSvg =
    `data:image/svg+xml;utf8,` +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">` +
        `<filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="1" stitchTiles="stitch"/></filter>` +
        `<rect width="100%" height="100%" filter="url(#n)"/></svg>`
    );

  return (
    <div
      className={className}
      style={{ position: "absolute", inset: 0, ...vars, ...style }}
      aria-hidden="true"
    >
      <div style={{ position: "absolute", inset: 0, ...gradientBackground }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: `url('${noiseSvg}')`,
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          opacity: noiseOpacity,
        }}
      />
    </div>
  );
}
