"use client";

import Sunlight from "./Sunlight";
import styles from "./background.module.scss";

export default function Background() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.night}>
        <div className={styles.orbWarm} />
        <div className={styles.orbCool} />
        <div className={styles.orbGold} />

        <div className={styles.stars} />
        <div className={styles.stars2} />
        <div className={styles.stars3} />
      </div>

      <div className={styles.day}>
        <Sunlight />
      </div>
    </div>
  );
}
