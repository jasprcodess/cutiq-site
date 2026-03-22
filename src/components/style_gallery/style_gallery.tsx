/* eslint-disable @next/next/no-img-element */
"use client";

import { withBasePath } from "@/lib/utils";
import styles from "./style_gallery.module.css";

export function StyleGallery() {
  const src = withBasePath("/cutiq/style-strip.png");
  return (
    <div className={styles.wrapper}>
      <div className={styles.rotated}>
        <div className={styles.track}>
          <img src={src} alt="" draggable={false} className={styles.strip} />
          <img src={src} alt="" draggable={false} className={styles.strip} aria-hidden="true" />
        </div>
      </div>
      <div className={styles.fadeTop} />
      <div className={styles.fadeBottom} />
      <div className={styles.fadeLeft} />
      <div className={styles.fadeRight} />
    </div>
  );
}
