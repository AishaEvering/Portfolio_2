"use client";

import styles from "./sunlight.module.scss";

const DUST_COUNT = 60;

export default function Sunlight() {
  return (
    <div className={styles.sunlight} aria-hidden="true">
      <div className={styles.rays} />
      <div className={styles.dust}>
        {Array.from({ length: DUST_COUNT }, (_, i) => (
          <i key={i} />
        ))}
      </div>
    </div>
  );
}
