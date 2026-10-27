"use client";

import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.atmosphere} aria-hidden="true">
        <div className={styles.glowOne} />
        <div className={styles.glowTwo} />
        <div className={styles.glowThree} />
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>
          Software Engineer · Computational Biology & Scientific Software
          Development
        </p>

        <h1 className={styles.headline}>
          <span className={styles.line}>I build software.</span>
          <span className={styles.line}>I analyze data.</span>
          <span className={`${styles.line} ${styles.accent}`}>
            I ask biological questions.
          </span>
        </h1>

        <div className={styles.introduction}>
          <p>
            I&apos;m a software engineer with over 20 years of experience and a
            Master of Science in Computational Life Sciences from Arizona State
            University. I develop computational tools, interactive applications,
            and data visualizations that help scientists explore, analyze, and
            understand complex biological data.
          </p>

          <div className={styles.actions}>
            <a href="/about" className={styles.primaryButton}>
              About me <span aria-hidden="true">↗</span>
            </a>

            <a
              href="mailto:shovon3000g@gmail.com"
              className={styles.secondaryButton}
            >
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>

      <a href="#work" className={styles.scrollCue}>
        Scroll to explore <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
};
