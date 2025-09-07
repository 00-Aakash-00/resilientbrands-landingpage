"use client";

import { useState, useEffect } from "react";

export function useMobile(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < breakpoint);
      };

      checkIsMobile();
      window.addEventListener("resize", checkIsMobile);
      return () => window.removeEventListener("resize", checkIsMobile);
    }
  }, [breakpoint]);

  return isMobile;
}

export function useScreenSize() {
  const [mounted, setMounted] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setMounted(true);
    
    if (typeof window !== 'undefined') {
      const updateScreenSize = () => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      updateScreenSize();
      window.addEventListener("resize", updateScreenSize);
      return () => window.removeEventListener("resize", updateScreenSize);
    }
  }, []);

  // Safe defaults for SSR
  const safeWidth = mounted ? screenSize.width : 1024;
  const safeHeight = mounted ? screenSize.height : 768;

  return {
    width: safeWidth,
    height: safeHeight,
    isMobile: safeWidth < 768,
    isTablet: safeWidth >= 768 && safeWidth < 1024,
    isDesktop: safeWidth >= 1024,
    isSmallMobile: safeWidth < 480,
  };
}