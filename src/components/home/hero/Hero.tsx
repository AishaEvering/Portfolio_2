"use client";

import { HeroImg } from "./components/HeroImg";
import styles from "./hero.module.scss";
import { StandardButton } from "@/components/buttons/StandardButton";
import { OutlineButton } from "@/components/buttons/OutlineButton";
import { Reveal } from "@/components/utils/Reveal";
import { RotatingText } from "./components/RotatingText";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <HeroImg />
        <div>
          <Reveal>
            <h1 className={styles.title}>
              Hey, I&apos;m Aisha<span>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>
              I&apos;m a{" "}
              <span>
                Computational Biology Graduate Student & Software Engineer
              </span>
              {/* <p className={styles.staticText}>I&apos;m a</p> */}
              {/* <RotatingText /> */}
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
              I&apos;m a software engineer with a background in scalable web
              development and a growing focus on machine learning,
              bioinformatics, and computational biology.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
              Currently pursuing a master&apos;s degree in Computational Life
              Sciences at Arizona State University, I&apos;m building projects
              focused on genomics, data analysis, and AI-driven research tools.
            </p>
          </Reveal>
          <Reveal>
            <div className="btn-container">
              <StandardButton
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView()
                }
              >
                Contact me
              </StandardButton>
              <OutlineButton onClick={() => window.open("/resume.pdf")}>
                My resume
              </OutlineButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
