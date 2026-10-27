"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "./about.module.scss";
import { AboutTimelineLines } from "./AboutTimelineLines";

export const About = () => {
  return (
    <section id="about" className={`section-wrapper ${styles.aboutSection}`}>
      <AboutTimelineLines />
      <motion.div
        className={styles.about}
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 90, damping: 18 }}
      >
        <div className={styles.content}>
          <span className={styles.eyebrow}>A LITTLE ABOUT ME / 001</span>

          <h2 className={styles.title}>There's more to the story.</h2>

          <p className={styles.description}>
            I've spent more than two decades building software, and somewhere
            along the way, biology gave me an entirely new set of questions to
            explore.
          </p>

          <p className={styles.description}>
            Beyond code and research, I love plants, hiking, LEGO, and getting
            lost in a good video game.
          </p>

          <div className={styles.aboutNavigation}>
            <span className={styles.navigationLabel}>
              EXPLORE MY BACKGROUND
            </span>

            <nav
              className={styles.quickLinks}
              aria-label="Explore my background"
            >
              <Link href="/about#experience" className={styles.quickLink}>
                Experience
                <FiArrowUpRight aria-hidden="true" />
              </Link>

              <Link href="/about#education" className={styles.quickLink}>
                Education
                <FiArrowUpRight aria-hidden="true" />
              </Link>

              <Link href="/about#skills" className={styles.quickLink}>
                Skills &amp; Tools
                <FiArrowUpRight aria-hidden="true" />
              </Link>
            </nav>

            <Link href="/about" className={styles.aboutLink}>
              Get to know me
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/project-imgs/about-pic.png"
            alt="Aisha working in a laboratory"
            width={500}
            height={600}
            className={styles.image}
          />
        </div>
      </motion.div>
    </section>
  );
};
