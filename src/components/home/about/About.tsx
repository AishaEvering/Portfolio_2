"use client";
import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <div className={styles.square}>
              <div className={styles.boxImgContainer}>
                <Image
                  className={styles.boxImg}
                  src="/project-imgs/about-pic.png"
                  alt="About Picture"
                  height={500}
                  width={500}
                />
              </div>
              <p className={`${styles.aboutText} boxP`}>
                I&apos;m a software engineer and computational biology graduate
                student focused on the intersection of machine learning,
                bioinformatics, and scientific computing.
              </p>
              <p className={styles.aboutText}>
                With a background in scalable software development and
                data-driven applications, I&apos;m now building projects
                centered around genomics, biological data analysis,
                visualization, and machine learning applications for scientific
                research while pursuing my master&apos;s degree in Computational
                Life Sciences at Arizona State University.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              My goal is to combine engineering, data science, and biology to
              help create impactful tools for healthcare and scientific
              discovery.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              When I’m away from the keyboard, I enjoy building Lego towers{" "}
              <Image
                height={500}
                width={500}
                className={styles.emoji}
                src="/project-imgs/lego.png"
                alt="Lego Emoji"
              />{" "}
              with my children, experimenting with creative ideas, and exploring
              new technologies that inspire curiosity and innovation.
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
