/* eslint-disable @next/next/no-img-element */
"use client";

import { withBasePath } from "@/lib/utils";
import styles from "./cover_image.module.css";

interface CoverImageProps {
  src: string;
  alt: string;
  objectPosition?: string;
  fadeBottom?: boolean;
}

export function CoverImage({ src, alt, objectPosition = "center", fadeBottom = false }: CoverImageProps) {
  return (
    <div className={`${styles.wrapper} ${fadeBottom ? styles.fadeBottom : ""}`}>
      <img
        src={withBasePath(src)}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={styles.image}
        style={{ objectPosition }}
      />
    </div>
  );
}
