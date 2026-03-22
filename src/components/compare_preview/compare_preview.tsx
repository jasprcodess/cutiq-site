/* eslint-disable @next/next/no-img-element */
"use client";

import { withBasePath } from "@/lib/utils";
import styles from "./compare_preview.module.css";

interface ComparePreviewProps {
  leftSrc: string;
  rightSrc: string;
}

export function ComparePreview({ leftSrc, rightSrc }: ComparePreviewProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.photo}>
        <img
          src={withBasePath(leftSrc)}
          alt="Original look"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={withBasePath(rightSrc)}
          alt="Generated style"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}
