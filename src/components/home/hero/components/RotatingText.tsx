"use client";
import styles from "./rotatingtext.module.scss";

export const RotatingText = () => {
  return (
    <main className={styles.container}>
      <p className={styles.staticText}>I&apos;m a</p>
      <section className={styles.animation}>
        <div>Software Engineer</div>
        <div>M.L. Engineer</div>
        <div>Front End Developer</div>
        <div>Application Developer</div>
      </section>
    </main>
  );
};
