"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // milliseconds
  variant?: "up" | "fade" | "scale";
  threshold?: number;
  as?: "div" | "section" | "article" | "li" | "span";
}

export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  variant = "up",
  threshold = 0.08,
  as: Component = "div",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion, reveal immediately without animation
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.02,
        rootMargin: "0px 0px 80px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const variantClass =
    variant === "fade"
      ? "reveal-fade"
      : variant === "scale"
      ? "reveal-scale"
      : "";

  return (
    <Component
      ref={ref as any}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
      className={`reveal-init ${variantClass} ${
        isVisible ? "reveal-active" : ""
      } ${className}`}
    >
      {children}
    </Component>
  );
}
