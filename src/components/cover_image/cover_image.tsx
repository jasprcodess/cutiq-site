/* eslint-disable @next/next/no-img-element */
"use client";

import { withBasePath } from "@/lib/utils";
import styles from "./cover_image.module.css";

interface CoverImageProps {
  src: string;
  alt: string;
  objectPosition?: string;
}

export function CoverImage({ src, alt, objectPosition = "center" }: CoverImageProps) {
  return (
    <div className={styles.wrapper}>
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
