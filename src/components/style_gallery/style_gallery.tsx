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
  "/cutiq/style-buzz-cut.jpg",
];

// 12 images = 2 full rows of 6 columns per set
// Render 2 identical sets so we can scroll exactly -50% for a seamless loop
const SET = BASE_IMAGES;
const TILES = [...SET, ...SET];

export function StyleGallery() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rotated}>
        <div className={styles.scrollContainer}>
          <div className={styles.grid}>
            {TILES.map((src, i) => (
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
        </div>
      </div>
      <div className={styles.fadeTop} />
      <div className={styles.fadeBottom} />
      <div className={styles.fadeLeft} />
      <div className={styles.fadeRight} />
    </div>
  );
}
