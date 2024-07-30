import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <div className={styles.square}>
              <div className={styles.boxImg}>
                <img src="/project-imgs/about-pic.png" alt="About Picture" />
              </div>
              <p
                className={`${styles.aboutText} ${styles.highlightFirstLetter} boxP`}
              >
                Hey! I&apos;m Bob, if you haven&apos;t already gathered that by
                now. I&apos;m a painter turned software engineer from Daytona,
                Florida. I specialize in the backend, primarily Node and Rust,
                but love building with whatever tools are right for the job.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I currently work for Google on Google Photos. I also toss in my ¢2
              with the design systems teams from time to time (once an artist,
              always an artist, amirite?).
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I still love to paint. Any given Sunday
              you&apos;ll find me scribbling some happy clouds with my son ☁️ I
              even teach courses online if you&apos;re looking to learn!
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m passively looking for new positions where I can merge my
              love for code with my love for the canvas. If you think
              you&apos;ve got an opening that I might like, let&apos;s connect
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
