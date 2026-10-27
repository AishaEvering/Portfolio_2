"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./journeyChapter.module.scss";
import { motion, useReducedMotion } from "framer-motion";

type JourneyChapterProps = {
  number: string;
  label: string;
  title: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  variant?: "default" | "asu";
};

export function JourneyChapter({
  number,
  label,
  title,
  paragraphs,
  image,
  imageAlt = "A moment from my life",
  reverse = false,
  variant = "default",
}: JourneyChapterProps) {
  const isAsu = variant === "asu";
  const chapterRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const reduceMotion = useReducedMotion();

  const revealProps = {
    initial: reduceMotion ? false : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.4 },
  };

  useEffect(() => {
    const chapter = chapterRef.current;
    if (!chapter) return;

    const node = chapter.querySelector(`.${styles.node}`);
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: 0,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  // Independent, one-time content lifts; the vine keeps its own trigger.
  useEffect(() => {
    const chapter = chapterRef.current;
    if (!chapter) return;

    const photo = chapter.querySelector(`.${styles.photo}`);
    const story = chapter.querySelector(`.${styles.story}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -18% 0px", threshold: 0.12 },
    );

    if (photo) observer.observe(photo);
    if (story) observer.observe(story);
    return () => observer.disconnect();
  }, []);

  const chapterClasses = [
    styles.chapter,
    isVisible && styles.isVisible,
    reverse && styles.reverse,
    isAsu && styles.asu,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article ref={chapterRef} className={chapterClasses}>
      <motion.div className={styles.photo} {...revealProps}>
        {image ? (
          <img src={image} alt={imageAlt} />
        ) : (
          <div className={styles.photoPlaceholder}>
            <span>image here</span>
          </div>
        )}
      </motion.div>

      <div className={styles.stem} aria-hidden="true">
        <svg
          data-chapter-vine
          className={styles.vine}
          viewBox="0 0 72 600"
          preserveAspectRatio="none"
        >
          <path
            className={styles.vinePath}
            d="M 36 0 C 12 110, 60 190, 36 300 S 12 490, 36 600"
          />
          <path
            className={styles.leaf}
            d="M 37 145 Q 5 110, 8 80 Q 39 100, 37 145"
          />
          <path
            className={styles.leaf}
            d="M 34 425 Q 67 390, 65 365 Q 35 385, 34 425"
          />
        </svg>
        <span className={styles.node}>{number}</span>
      </div>

      <motion.div className={styles.story} {...revealProps}>
        <span className={styles.eyebrow}>
          CHAPTER {number} / {label}
        </span>
        <h2>{title}</h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </motion.div>
    </article>
  );
}
