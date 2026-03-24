"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import styles from "./blur_text_effect.module.css";

interface BlurTextEffectProps {
  children: string;
  className?: string;
  delay?: number;
}

export function BlurTextEffect({ children, className = "", delay = 0 }: BlurTextEffectProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!mounted || !containerRef.current) return;

    const chars = containerRef.current.querySelectorAll(`.${styles.char}`);

    gsap.set(chars, { opacity: 0, y: 10, filter: "blur(8px)" });

    gsap.to(chars, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.3,
      ease: "power2.out",
      stagger: 0.015,
      delay: delay / 1000,
      clearProps: "filter",
    });
  }, [mounted, children, delay]);

  return (
    <span className={`${styles.container} ${className}`} ref={containerRef}>
      {children.split("").map((char, i) => (
        <span
          key={`${char}-${i}`}
          className={styles.char}
          style={mounted ? undefined : { opacity: 1 }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
