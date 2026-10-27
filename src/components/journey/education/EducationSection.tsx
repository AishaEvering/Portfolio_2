"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./educationSection.module.scss";

const degrees = [
  { year: "2026", degree: "Master of Science", field: "Computational Life Sciences", school: "Arizona State University", featured: true },
  { year: "2001", degree: "Bachelor of Science", field: "Software Engineering", school: "University of Advancing Technology" },
  { year: "2000", degree: "Associate of Science", field: "Application Development", school: "University of Advancing Technology" },
  { year: "1997", degree: "Associate of Science", field: "Laser Electro-Optics", school: "Texas State Technical College" },
];

export function EducationSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="education" className={styles.section} aria-labelledby="education-title">
      <div className={styles.inner}>
        <div className={styles.divider} aria-hidden="true">
          <span className={styles.dividerLine} />
          <svg className={styles.sprout} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 27V13" />
            <path d="M16 20C9 20 6 16 6 10c6 0 10 3 10 10Z" />
            <path d="M16 15c0-7 4-10 10-10 0 6-3 10-10 10Z" />
          </svg>
          <span className={styles.dividerLine} />
        </div>
        <div className={styles.heading}>
          <p className={styles.kicker}>THE FOUNDATION</p>
          <h2 id="education-title">Education</h2>
          <p>From engineering foundations to computational life sciences.</p>
        </div>
        <div className={styles.degreeList}>
          {degrees.map((item, index) => (
            <motion.article
              key={`${item.year}-${item.field}`}
              className={`${styles.degree} ${item.featured ? styles.featured : ""}`}
              initial={reducedMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.18) }}
            >
              <div className={styles.year}>{item.year}</div>
              <div className={styles.details}>
                <p className={styles.school}>{item.school}</p>
                <h3>{item.degree}</h3>
                <p className={styles.field}>{item.field}</p>
              </div>
              {item.featured && <span className={styles.highlight} aria-hidden="true">✳</span>}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
