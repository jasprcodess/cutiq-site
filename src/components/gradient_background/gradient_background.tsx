"use client";

import { useRef, useEffect } from "react";
import styles from "./gradient_background.module.css";

function Noise({
  patternSize = 100,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 40,
  intensity = 1,
}: {
  patternSize?: number;
  patternScaleX?: number;
  patternScaleY?: number;
  patternRefreshInterval?: number;
  patternAlpha?: number;
  intensity?: number;
}) {
  const grainRef = useRef<HTMLCanvasElement>(null);
  const canvasCssSizeRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    const patternCanvas = document.createElement("canvas");
    patternCanvas.width = patternSize;
    patternCanvas.height = patternSize;

    const patternCtx = patternCanvas.getContext("2d");
    if (!patternCtx) return;

    const patternData = patternCtx.createImageData(patternSize, patternSize);
    const patternPixelDataLength = patternSize * patternSize * 4;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      let cssWidth = window.innerWidth;
      let cssHeight = window.innerHeight;

      if (canvas.parentElement) {
        const rect = canvas.parentElement.getBoundingClientRect();
        cssWidth = rect.width;
        cssHeight = rect.height;
      }

      canvasCssSizeRef.current = { width: cssWidth, height: cssHeight };
      canvas.width = cssWidth * dpr;
      canvas.height = cssHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const updatePattern = () => {
      for (let i = 0; i < patternPixelDataLength; i += 4) {
        const value = Math.random() * 255 * intensity;
        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha;
      }
      patternCtx.putImageData(patternData, 0, 0);
    };

    const drawGrain = () => {
      const { width: cssWidth, height: cssHeight } = canvasCssSizeRef.current;
      if (cssWidth === 0 || cssHeight === 0) return;

      ctx.clearRect(0, 0, cssWidth, cssHeight);
      ctx.save();

      const safeScaleX = Math.max(0.001, patternScaleX);
      const safeScaleY = Math.max(0.001, patternScaleY);
      ctx.scale(safeScaleX, safeScaleY);

      const fillPattern = ctx.createPattern(patternCanvas, "repeat");
      if (fillPattern) {
        ctx.fillStyle = fillPattern;
        ctx.fillRect(0, 0, cssWidth / safeScaleX, cssHeight / safeScaleY);
      }

      ctx.restore();
    };

    let animationFrameId: number;
    const loop = () => {
      if (canvasCssSizeRef.current.width > 0 && canvasCssSizeRef.current.height > 0) {
        if (frame % patternRefreshInterval === 0) {
          updatePattern();
          drawGrain();
        }
      }
      frame++;
      animationFrameId = window.requestAnimationFrame(loop);
    };

    window.addEventListener("resize", resize);
    resize();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [patternSize, patternScaleX, patternScaleY, patternRefreshInterval, patternAlpha, intensity]);

  return <canvas className={styles.noiseCanvas} ref={grainRef} />;
}

export function GradientBackground() {
  return (
    <div
      className={styles.wrapper}
      style={{
        background:
          "radial-gradient(125% 125% at 50% 101%, rgba(180,180,180,1) 0%, rgba(200,200,200,1) 12%, rgba(210,210,210,0.9) 20%, rgba(220,220,220,0.7) 30%, rgba(235,235,235,0.4) 50%, rgba(245,245,245,0.1) 70%, rgba(245,245,245,0) 100%)",
      }}
    >
      <Noise
        patternSize={100}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={35}
        intensity={0.8}
      />
    </div>
  );
}
