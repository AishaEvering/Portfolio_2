import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { OutlineButton } from "@/components/buttons/OutlineButton";
import { HeroImg } from "./HeroImg";
import styles from "./hero.module.scss";

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
              I&apos;m a <span>Software Engineer</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
              I&apos;ve spent several years building and scaling software for
              some innovative companies. Now, I'm focusing on developing
              exciting machine learning projects as I work towards becoming a
              Machine Learning Engineer.
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
