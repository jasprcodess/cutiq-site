/* eslint-disable @next/next/no-img-element */
"use client";

import { withBasePath } from "@/lib/utils";
import styles from "./style_gallery.module.css";

const BASE_IMAGES = [
  "/cutiq/style-buzz-cut.jpg",
  "/cutiq/style-pompadour.jpg",
  "/cutiq/style-curtains.jpg",
  "/cutiq/style-ivy-league.jpg",
  "/cutiq/style-modern-shag.jpg",
  "/cutiq/style-side-part.jpg",
  "/cutiq/style-shoulder-layers.jpg",
  "/cutiq/style-surfer-long.jpg",
  "/cutiq/style-textured-fringe.jpg",
  "/cutiq/style-man-bun.jpg",
  "/cutiq/style-caesar.jpg",
];

// Triple the images so the scroll animation loops seamlessly
const STYLE_IMAGES = [...BASE_IMAGES, ...BASE_IMAGES, ...BASE_IMAGES];

export function StyleGallery() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {STYLE_IMAGES.map((src, i) => (
          <div key={i} className={styles.tile}>
            <img
              src={withBasePath(src)}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
      <div className={styles.fadeTop} />
      <div className={styles.fadeBottom} />
      <div className={styles.fadeLeft} />
      <div className={styles.fadeRight} />
    </div>
  );
}
