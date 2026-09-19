import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./featured.module.scss";
import React from "react";
import { Reveal } from "@/components/utils/Reveal";

export default function featured() {
  return (
    <section className="section-wrapper" id="featured">
      <SectionHeader title="Featured" dir="l" accent="#1b6b5b" />
      <Reveal>
        <div>
          <div className={styles.featuredPanel}>
            <div className={styles.featureContent}>
              <div className={styles.featureCopy}>
                <div className={styles.bioToolsHeader}>
                  <img
                    className={styles.logo}
                    src="/biotools-logo.svg"
                    alt="BioTools logo"
                    width={90}
                    height={90}
                  />

                  <div>
                    <h4>BioTools</h4>
                    <p>SAM View Command Builder</p>
                  </div>
                </div>

                <p className={styles.tagline}>
                  Bioinformatics is complicated enough. BioTools aims to keep
                  the software around it simple, predictable, and
                  understandable.
                </p>
              </div>

              <div className={styles.demo}>
                <img
                  className={styles.logo}
                  width={1300}
                  height={768}
                  src="/biotools-demo.gif"
                  alt="BioTools SAM View Command Builder demonstration"
                />
              </div>
            </div>

            <div className={styles.actions}>
              <a
                href="https://bio-tools.dev"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryAction}
              >
                Visit BioTools <span className={styles.arrow}>↗</span>
              </a>

              <a
                href="https://github.com/AishaEvering/BioTools"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryAction}
              >
                GitHub <span className={styles.arrow}>↗</span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
