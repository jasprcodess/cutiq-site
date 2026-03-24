"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
}

export function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y: 24, filter: "blur(8px)" });

    gsap.to(el, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.8,
      delay: delay / 1000,
      ease: "power2.out",
      clearProps: "filter",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === el) t.kill();
      });
    };
  }, [delay]);

  return <div ref={ref}>{children}</div>;
}
