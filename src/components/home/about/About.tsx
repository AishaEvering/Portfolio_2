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
              <p className={`${styles.aboutText} ${styles.subhead} boxP`}>
                Hello and nice to meet you! As Jay-Z famously said, &quot;
                <i>Allow me to reintroduce myself.</i>&quot; I&apos;m Aisha
                Evering, and I&apos;ve recently focused on advancing my
                expertise in data science through a range of certifications and
                hands-on projects. I hold both Data Science and Associate Data
                Science certifications from Datacamp, as well as an AWS Cloud
                Practitioner certification. Currently, I&apos;m working towards
                my AWS Machine Learning certification. My ambition is to become
                a Machine Learning Engineer, and I have a deep passion for
                Machine Learning with Python.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              My professional experience lies in Software Engineering, where I
              have specialized in developing applications using technologies
              such as Dart, C#, Java, and JavaScript. I am proficient in React
              as well as JSON manipulation.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              When I&apos;m not studying and building machine learning projects,
              I enjoy building Lego towers{" "}
              <Image
                height={500}
                width={500}
                className={styles.emoji}
                src="/project-imgs/lego.png"
                alt="Lego Emoji"
              />{" "}
              with my children. I am eager to apply my strong analytical skills
              and programming expertise in a data-driven role.
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
