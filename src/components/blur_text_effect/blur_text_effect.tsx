"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./blur_text_effect.module.css";

interface BlurTextEffectProps {
  children: string;
  className?: string;
  delay?: number;
}

export function BlurTextEffect({ children, className = "", delay = 0 }: BlurTextEffectProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!triggered || !containerRef.current) return;

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
  }, [triggered, children, delay]);

  // Split into words, keep each word as a nowrap unit so wrapping only happens between words
  const words = children.split(" ");

  return (
    <span className={`${styles.container} ${className}`} ref={containerRef}>
      {words.map((word, wi) => (
        <span key={wi} className={styles.word}>
          {word.split("").map((char, ci) => (
            <span
              key={`${wi}-${ci}`}
              className={styles.char}
              style={triggered ? undefined : { opacity: 1 }}
            >
              {char}
            </span>
          ))}
          {wi < words.length - 1 && (
            <span className={styles.char} style={triggered ? undefined : { opacity: 1 }}>
              {"\u00A0"}
            </span>
          )}
        </span>
      ))}
    </span>
  );
}
