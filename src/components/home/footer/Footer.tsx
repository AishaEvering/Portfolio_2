"use client";

import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContent}>
        <span className={styles.ornament} aria-hidden="true">
          ✦ ─── ❧ ─── ✦
        </span>

        <h2 className={styles.thankYou}>Thanks for visiting.</h2>

        <p className={styles.subtitle}>I'm glad you stopped by.</p>

        <div className={styles.divider} />

        <p className={styles.copyright}>
          © 2026 Aisha Evering · All rights reserved.
        </p>
      </div>
    </footer>
  );
};
