import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';

export interface BentoCardProps {
  color?: string;
  title?: string;
  description?: string;
  label?: string;
  textAutoHide?: boolean;
  disableAnimations?: boolean;
  svg?: React.ReactNode;
}

export interface BentoProps {
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '132, 0, 255';
const MOBILE_BREAKPOINT = 768;

const cardData: BentoCardProps[] = [
  {
    color: '#060010',
    title: 'Analytics',
    description: 'Track user behavior',
    label: 'Insights',
    svg: (
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="analytics-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8400FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00E6FB" stopOpacity="0.1" />
          </linearGradient>
          <pattern id="analytics-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="1" height="20" fill="#8400FF" opacity="0.05" />
            <rect x="0" y="0" width="20" height="1" fill="#8400FF" opacity="0.05" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#analytics-grid)" />
        <path d="M50 250 L100 200 L150 220 L200 150 L250 180 L300 100 L350 140" stroke="url(#analytics-gradient)" strokeWidth="2" fill="none" />
        <circle cx="50" cy="250" r="4" fill="#8400FF" />
        <circle cx="100" cy="200" r="4" fill="#8400FF" />
        <circle cx="150" cy="220" r="4" fill="#8400FF" />
        <circle cx="200" cy="150" r="4" fill="#8400FF" />
        <circle cx="250" cy="180" r="4" fill="#8400FF" />
        <circle cx="300" cy="100" r="4" fill="#8400FF" />
        <circle cx="350" cy="140" r="4" fill="#8400FF" />
        <rect x="80" y="220" width="40" height="30" fill="url(#analytics-gradient)" opacity="0.3" />
        <rect x="180" y="170" width="40" height="80" fill="url(#analytics-gradient)" opacity="0.3" />
        <rect x="280" y="120" width="40" height="130" fill="url(#analytics-gradient)" opacity="0.3" />
      </svg>
    )
  },
  {
    color: '#060010',
    title: 'Dashboard',
    description: 'Centralized data view',
    label: 'Overview',
    svg: (
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="dashboard-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E6FB" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8400FF" stopOpacity="0.1" />
          </linearGradient>
          <pattern id="dashboard-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="15" cy="15" r="1" fill="#8400FF" opacity="0.2" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#dashboard-dots)" />
        <rect x="30" y="30" width="150" height="100" rx="8" fill="none" stroke="url(#dashboard-gradient)" strokeWidth="1.5" />
        <rect x="200" y="30" width="170" height="100" rx="8" fill="none" stroke="url(#dashboard-gradient)" strokeWidth="1.5" />
        <rect x="30" y="150" width="340" height="120" rx="8" fill="none" stroke="url(#dashboard-gradient)" strokeWidth="1.5" />
        <rect x="50" y="50" width="110" height="60" rx="4" fill="url(#dashboard-gradient)" opacity="0.2" />
        <rect x="220" y="50" width="130" height="60" rx="4" fill="url(#dashboard-gradient)" opacity="0.2" />
        <rect x="50" y="170" width="300" height="80" rx="4" fill="url(#dashboard-gradient)" opacity="0.2" />
        <line x1="80" y1="70" x2="130" y2="70" stroke="#00E6FB" strokeWidth="2" opacity="0.6" />
        <line x1="80" y1="85" x2="120" y2="85" stroke="#8400FF" strokeWidth="2" opacity="0.6" />
        <circle cx="250" cy="80" r="20" fill="none" stroke="url(#dashboard-gradient)" strokeWidth="2" />
        <path d="M250 60 L250 80 L265 90" stroke="#00E6FB" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    color: '#060010',
    title: 'Collaboration',
    description: 'Work together seamlessly',
    label: 'Teamwork',
    svg: (
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="collab-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2DE1FC" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8400FF" stopOpacity="0.2" />
          </linearGradient>
          <pattern id="collab-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 40 L40 0" stroke="#8400FF" strokeWidth="0.5" opacity="0.1" />
            <path d="M0 0 L40 40" stroke="#8400FF" strokeWidth="0.5" opacity="0.1" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#collab-grid)" />
        <circle cx="200" cy="150" r="25" fill="url(#collab-gradient)" opacity="0.3" />
        <circle cx="100" cy="100" r="20" fill="none" stroke="url(#collab-gradient)" strokeWidth="2" />
        <circle cx="300" cy="100" r="20" fill="none" stroke="url(#collab-gradient)" strokeWidth="2" />
        <circle cx="150" cy="220" r="20" fill="none" stroke="url(#collab-gradient)" strokeWidth="2" />
        <circle cx="250" cy="220" r="20" fill="none" stroke="url(#collab-gradient)" strokeWidth="2" />
        <line x1="115" y1="110" x2="185" y2="140" stroke="url(#collab-gradient)" strokeWidth="1.5" />
        <line x1="285" y1="110" x2="215" y2="140" stroke="url(#collab-gradient)" strokeWidth="1.5" />
        <line x1="165" y1="210" x2="185" y2="165" stroke="url(#collab-gradient)" strokeWidth="1.5" />
        <line x1="235" y1="210" x2="215" y2="165" stroke="url(#collab-gradient)" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="5" fill="#2DE1FC" />
        <circle cx="300" cy="100" r="5" fill="#2DE1FC" />
        <circle cx="150" cy="220" r="5" fill="#2DE1FC" />
        <circle cx="250" cy="220" r="5" fill="#2DE1FC" />
        <circle cx="200" cy="150" r="8" fill="#8400FF" />
      </svg>
    )
  },
  {
    color: '#060010',
    title: 'Automation',
    description: 'Streamline workflows',
    label: 'Efficiency',
    svg: (
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="auto-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8400FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2DE1FC" stopOpacity="0.2" />
          </linearGradient>
          <pattern id="auto-hex" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
            <polygon points="30,0 45,15 45,37 30,52 15,37 15,15" fill="none" stroke="#8400FF" strokeWidth="0.5" opacity="0.1" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#auto-hex)" />
        <g transform="translate(200, 150)">
          <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 0 0" to="360 0 0" dur="20s" repeatCount="indefinite" />
          <path d="M0,-40 L12,-37 L23,-31 L31,-23 L37,-12 L40,0 L37,12 L31,23 L23,31 L12,37 L0,40 L-12,37 L-23,31 L-31,23 L-37,12 L-40,0 L-37,-12 L-31,-23 L-23,-31 L-12,-37 Z" fill="none" stroke="url(#auto-gradient)" strokeWidth="2" />
          <circle cx="0" cy="-30" r="5" fill="#8400FF" />
          <circle cx="26" cy="-15" r="5" fill="#2DE1FC" />
          <circle cx="26" cy="15" r="5" fill="#8400FF" />
          <circle cx="0" cy="30" r="5" fill="#2DE1FC" />
          <circle cx="-26" cy="15" r="5" fill="#8400FF" />
          <circle cx="-26" cy="-15" r="5" fill="#2DE1FC" />
        </g>
        <path d="M50 150 L100 150" stroke="url(#auto-gradient)" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <path d="M300 150 L350 150" stroke="url(#auto-gradient)" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#2DE1FC" />
          </marker>
        </defs>
      </svg>
    )
  },
  {
    color: '#060010',
    title: 'Integration',
    description: 'Connect favorite tools',
    label: 'Connectivity',
    svg: (
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="integration-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E6FB" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8400FF" stopOpacity="0.2" />
          </linearGradient>
          <pattern id="integration-lines" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <line x1="0" y1="25" x2="50" y2="25" stroke="#8400FF" strokeWidth="0.5" opacity="0.1" />
            <line x1="25" y1="0" x2="25" y2="50" stroke="#8400FF" strokeWidth="0.5" opacity="0.1" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#integration-lines)" />
        <rect x="170" y="120" width="60" height="60" rx="8" fill="none" stroke="url(#integration-gradient)" strokeWidth="2" />
        <rect x="50" y="50" width="50" height="50" rx="8" fill="none" stroke="url(#integration-gradient)" strokeWidth="1.5" opacity="0.7" />
        <rect x="300" y="50" width="50" height="50" rx="8" fill="none" stroke="url(#integration-gradient)" strokeWidth="1.5" opacity="0.7" />
        <rect x="50" y="200" width="50" height="50" rx="8" fill="none" stroke="url(#integration-gradient)" strokeWidth="1.5" opacity="0.7" />
        <rect x="300" y="200" width="50" height="50" rx="8" fill="none" stroke="url(#integration-gradient)" strokeWidth="1.5" opacity="0.7" />
        <path d="M100 75 Q150 100 170 130" stroke="url(#integration-gradient)" strokeWidth="1.5" fill="none" />
        <path d="M300 75 Q250 100 230 130" stroke="url(#integration-gradient)" strokeWidth="1.5" fill="none" />
        <path d="M100 225 Q150 200 170 170" stroke="url(#integration-gradient)" strokeWidth="1.5" fill="none" />
        <path d="M300 225 Q250 200 230 170" stroke="url(#integration-gradient)" strokeWidth="1.5" fill="none" />
        <circle cx="200" cy="150" r="8" fill="#8400FF" />
        <circle cx="75" cy="75" r="4" fill="#00E6FB" />
        <circle cx="325" cy="75" r="4" fill="#00E6FB" />
        <circle cx="75" cy="225" r="4" fill="#00E6FB" />
        <circle cx="325" cy="225" r="4" fill="#00E6FB" />
      </svg>
    )
  },
  {
    color: '#060010',
    title: 'Security',
    description: 'Enterprise-grade protection',
    label: 'Protection',
    svg: (
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="security-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8400FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2DE1FC" stopOpacity="0.1" />
          </linearGradient>
          <pattern id="security-shield" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="25" height="25" fill="none" stroke="#8400FF" strokeWidth="0.5" opacity="0.05" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#security-shield)" />
        <path d="M200 50 L200 230 Q200 250 180 240 L100 200 Q80 190 80 170 L80 90 Q80 70 100 60 L180 20 Q200 10 200 30 Q200 10 220 20 L300 60 Q320 70 320 90 L320 170 Q320 190 300 200 L220 240 Q200 250 200 230 Z" fill="none" stroke="url(#security-gradient)" strokeWidth="2" />
        <path d="M200 80 L200 210 Q200 220 185 213 L130 185 Q115 178 115 163 L115 107 Q115 92 130 85 L185 57 Q200 50 200 65 Q200 50 215 57 L270 85 Q285 92 285 107 L285 163 Q285 178 270 185 L215 213 Q200 220 200 210 Z" fill="url(#security-gradient)" opacity="0.2" />
        <circle cx="200" cy="140" r="15" fill="none" stroke="#8400FF" strokeWidth="2" opacity="0.6" />
        <rect x="195" y="140" width="10" height="20" rx="2" fill="#8400FF" opacity="0.8" />
        <circle cx="200" cy="145" r="3" fill="#2DE1FC" />
        <path d="M150 100 L250 100" stroke="#2DE1FC" strokeWidth="1" opacity="0.3" />
        <path d="M150 180 L250 180" stroke="#2DE1FC" strokeWidth="1" opacity="0.3" />
      </svg>
    )
  }
];

const createParticleElement = (x: number, y: number, color: string = DEFAULT_GLOW_COLOR): HTMLDivElement => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const calculateSpotlightValues = (radius: number) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75
});

const updateCardGlowProperties = (card: HTMLElement, mouseX: number, mouseY: number, glow: number, radius: number) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty('--glow-x', `${relativeX}%`);
  card.style.setProperty('--glow-y', `${relativeY}%`);
  card.style.setProperty('--glow-intensity', glow.toString());
  card.style.setProperty('--glow-radius', `${radius}px`);
};

const ParticleCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  disableAnimations?: boolean;
  style?: React.CSSProperties;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}> = ({
  children,
  className = '',
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLDivElement[]>([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach(particle => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        }
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true) as HTMLDivElement;
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none',
          repeat: -1,
          yoyo: true
        });

        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true
        });
      }, index * 100);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;

    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 5,
          rotateY: 5,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableTilt && !enableMagnetism) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.1,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.05;
        const magnetY = (y - centerY) * 0.05;

        magnetismAnimationRef.current = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (!clickEffect) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        {
          scale: 0,
          opacity: 1
        },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => ripple.remove()
        }
      );
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('click', handleClick);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('click', handleClick);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

  return (
    <div
      ref={cardRef}
      className={`${className} relative overflow-hidden`}
      style={{ ...style, position: 'relative', overflow: 'hidden' }}
    >
      {children}
    </div>
  );
};

const GlobalSpotlight: React.FC<{
  gridRef: React.RefObject<HTMLDivElement | null>;
  disableAnimations?: boolean;
  enabled?: boolean;
  spotlightRadius?: number;
  glowColor?: string;
}> = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR
}) => {
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const isInsideSection = useRef(false);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;

    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current || !gridRef.current) return;

      const section = gridRef.current.closest('.bento-section');
      const rect = section?.getBoundingClientRect();
      const mouseInside =
        rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

      isInsideSection.current = mouseInside || false;
      const cards = gridRef.current.querySelectorAll('.card');

      if (!mouseInside) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
        cards.forEach(card => {
          (card as HTMLElement).style.setProperty('--glow-intensity', '0');
        });
        return;
      }

      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;

      cards.forEach(card => {
        const cardElement = card as HTMLElement;
        const cardRect = cardElement.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }

        updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
      });

      gsap.to(spotlightRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });

      const targetOpacity =
        minDistance <= proximity
          ? 0.8
          : minDistance <= fadeDistance
            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
            : 0;

      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      isInsideSection.current = false;
      gridRef.current?.querySelectorAll('.card').forEach(card => {
        (card as HTMLElement).style.setProperty('--glow-intensity', '0');
      });
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

  return null;
};

const BentoCardGrid: React.FC<{
  children: React.ReactNode;
  gridRef?: React.RefObject<HTMLDivElement | null>;
}> = ({ children, gridRef }) => (
  <div
    className="bento-section grid gap-2 p-3 max-w-[54rem] select-none relative"
    style={{ fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.5rem)' }}
    ref={gridRef}
  >
    {children}
  </div>
);

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

const MagicBento: React.FC<BentoProps> = ({
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;

  return (
    <>
      <style>
        {`
          .bento-section {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 200px;
            --glow-color: ${glowColor};
            --border-color: #392e4e;
            --background-dark: #060010;
            --white: hsl(0, 0%, 100%);
            --purple-primary: rgba(132, 0, 255, 1);
            --purple-glow: rgba(132, 0, 255, 0.2);
            --purple-border: rgba(132, 0, 255, 0.8);
          }
          
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.35; }
          }
          
          @keyframes float-vertical {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes rotate-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          .card svg {
            animation: pulse-glow 4s ease-in-out infinite;
          }
          
          .card:hover svg {
            animation: pulse-glow 2s ease-in-out infinite;
            opacity: 0.35 !important;
          }
          
          .card svg path,
          .card svg circle,
          .card svg rect,
          .card svg line {
            transition: all 0.3s ease;
          }
          
          .card:hover svg path,
          .card:hover svg circle {
            filter: drop-shadow(0 0 3px currentColor);
          }
          
          .card-responsive {
            grid-template-columns: 1fr;
            width: 90%;
            margin: 0 auto;
            padding: 0.5rem;
          }
          
          @media (min-width: 600px) {
            .card-responsive {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          @media (min-width: 1024px) {
            .card-responsive {
              grid-template-columns: repeat(4, 1fr);
            }
            
            .card-responsive .card:nth-child(3) {
              grid-column: span 2;
              grid-row: span 2;
            }
            
            .card-responsive .card:nth-child(4) {
              grid-column: 1 / span 2;
              grid-row: 2 / span 2;
            }
            
            .card-responsive .card:nth-child(6) {
              grid-column: 4;
              grid-row: 3;
            }
          }
          
          .card--border-glow::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 6px;
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.8)) 0%,
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.4)) 30%,
                transparent 60%);
            border-radius: inherit;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: subtract;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 1;
          }
          
          .card--border-glow:hover::after {
            opacity: 1;
          }
          
          .card--border-glow:hover {
            box-shadow: 0 4px 20px rgba(46, 24, 78, 0.4), 0 0 30px rgba(${glowColor}, 0.2);
          }
          
          .particle::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: rgba(${glowColor}, 0.2);
            border-radius: 50%;
            z-index: -1;
          }
          
          .particle-container:hover {
            box-shadow: 0 4px 20px rgba(46, 24, 78, 0.2), 0 0 30px rgba(${glowColor}, 0.2);
          }
          
          .text-clamp-1 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .text-clamp-2 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          @media (max-width: 599px) {
            .card-responsive {
              grid-template-columns: 1fr;
              width: 90%;
              margin: 0 auto;
              padding: 0.5rem;
            }
            
            .card-responsive .card {
              width: 100%;
              min-height: 180px;
            }
          }
        `}
      </style>

      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      <BentoCardGrid gridRef={gridRef}>
        <div className="card-responsive grid gap-2">
          {cardData.map((card, index) => {
            const baseClassName = `card flex flex-col justify-between relative aspect-[4/3] min-h-[200px] w-full max-w-full p-5 rounded-[20px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] ${
              enableBorderGlow ? 'card--border-glow' : ''
            }`;

            const cardStyle = {
              backgroundColor: card.color || 'var(--background-dark)',
              borderColor: 'var(--border-color)',
              color: 'var(--white)',
              '--glow-x': '50%',
              '--glow-y': '50%',
              '--glow-intensity': '0',
              '--glow-radius': '200px'
            } as React.CSSProperties;

            if (enableStars) {
              return (
                <ParticleCard
                  key={index}
                  className={baseClassName}
                  style={cardStyle}
                  disableAnimations={shouldDisableAnimations}
                  particleCount={particleCount}
                  glowColor={glowColor}
                  enableTilt={enableTilt}
                  clickEffect={clickEffect}
                  enableMagnetism={enableMagnetism}
                >
                  {card.svg}
                  <div className="card__header flex justify-between gap-3 relative text-white z-10">
                    <span className="card__label text-base">{card.label}</span>
                  </div>
                  <div className="card__content flex flex-col relative text-white z-10">
                    <h3 className={`card__title font-normal text-base m-0 mb-1 ${textAutoHide ? 'text-clamp-1' : ''}`}>
                      {card.title}
                    </h3>
                    <p
                      className={`card__description text-xs leading-5 opacity-90 ${textAutoHide ? 'text-clamp-2' : ''}`}
                    >
                      {card.description}
                    </p>
                  </div>
                </ParticleCard>
              );
            }

            return (
              <div
                key={index}
                className={baseClassName}
                style={cardStyle}
                ref={el => {
                  if (!el) return;

                  const handleMouseMove = (e: MouseEvent) => {
                    if (shouldDisableAnimations) return;

                    const rect = el.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;

                    if (enableTilt) {
                      const rotateX = ((y - centerY) / centerY) * -10;
                      const rotateY = ((x - centerX) / centerX) * 10;

                      gsap.to(el, {
                        rotateX,
                        rotateY,
                        duration: 0.1,
                        ease: 'power2.out',
                        transformPerspective: 1000
                      });
                    }

                    if (enableMagnetism) {
                      const magnetX = (x - centerX) * 0.05;
                      const magnetY = (y - centerY) * 0.05;

                      gsap.to(el, {
                        x: magnetX,
                        y: magnetY,
                        duration: 0.3,
                        ease: 'power2.out'
                      });
                    }
                  };

                  const handleMouseLeave = () => {
                    if (shouldDisableAnimations) return;

                    if (enableTilt) {
                      gsap.to(el, {
                        rotateX: 0,
                        rotateY: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                      });
                    }

                    if (enableMagnetism) {
                      gsap.to(el, {
                        x: 0,
                        y: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                      });
                    }
                  };

                  const handleClick = (e: MouseEvent) => {
                    if (!clickEffect || shouldDisableAnimations) return;

                    const rect = el.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const maxDistance = Math.max(
                      Math.hypot(x, y),
                      Math.hypot(x - rect.width, y),
                      Math.hypot(x, y - rect.height),
                      Math.hypot(x - rect.width, y - rect.height)
                    );

                    const ripple = document.createElement('div');
                    ripple.style.cssText = `
                      position: absolute;
                      width: ${maxDistance * 2}px;
                      height: ${maxDistance * 2}px;
                      border-radius: 50%;
                      background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                      left: ${x - maxDistance}px;
                      top: ${y - maxDistance}px;
                      pointer-events: none;
                      z-index: 1000;
                    `;

                    el.appendChild(ripple);

                    gsap.fromTo(
                      ripple,
                      {
                        scale: 0,
                        opacity: 1
                      },
                      {
                        scale: 1,
                        opacity: 0,
                        duration: 0.8,
                        ease: 'power2.out',
                        onComplete: () => ripple.remove()
                      }
                    );
                  };

                  el.addEventListener('mousemove', handleMouseMove);
                  el.addEventListener('mouseleave', handleMouseLeave);
                  el.addEventListener('click', handleClick);
                }}
              >
                {card.svg}
                <div className="card__header flex justify-between gap-3 relative text-white z-10">
                  <span className="card__label text-base">{card.label}</span>
                </div>
                <div className="card__content flex flex-col relative text-white z-10">
                  <h3 className={`card__title font-normal text-base m-0 mb-1 ${textAutoHide ? 'text-clamp-1' : ''}`}>
                    {card.title}
                  </h3>
                  <p className={`card__description text-xs leading-5 opacity-90 ${textAutoHide ? 'text-clamp-2' : ''}`}>
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </BentoCardGrid>
    </>
  );
};

export default MagicBento;
