"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./skillsSection.module.scss";

const categories = [
  {
    title: "Bioinformatics & Computational Biology",
    skills: [
      "RNA-Seq Analysis",
      "Differential Gene Expression",
      "DESeq2",
      "Gene Ontology Enrichment",
      "clusterProfiler",
      "Phylogenetic Analysis",
      "Multiple Sequence Alignment",
      "Sequence Curation",
      "IQ-TREE",
      "FigTree",
      "EukPhylo",
      "Taxus",
      "SAMtools",
      "FASTQ",
      "BAM",
      "VCF",
    ],
  },
  {
    title: "Programming & Data Analysis",
    skills: [
      "Python",
      "R",
      "SQL / Relational Databases",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "ggplot2",
      "Matplotlib",
      "Plotly",
      "Tableau",
      "Jupyter Notebook",
    ],
  },
  {
    title: "Software Engineering",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "C#",
      "Java",
      "Dart",
      "Git",
      "REST APIs",
      "Full-Stack Development",
      "Unit Testing",
      "Agile",
    ],
  },
  {
    title: "Computing & Machine Learning",
    skills: [
      "HPC",
      "Slurm",
      "Linux",
      "Docker",
      "Google Cloud",
      "AWS (foundational)",
      "GitHub Actions (CI/CD)",
      "TensorFlow",
      "PyTorch",
    ],
  },
];

export function SkillsSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className={styles.section}
      aria-labelledby="skills-title"
    >
      <div className={styles.inner}>
        <header className={styles.heading}>
          <p className={styles.kicker}>THE TOOLKIT / SKILLS</p>
          <h2 id="skills-title">
            Where science meets <em>software.</em>
          </h2>
          <p>
            Computational research, thoughtful engineering, and the tools that
            connect them.
          </p>
        </header>

        <div className={styles.directory}>
          {categories.map((category, index) => (
            <motion.div
              className={styles.category}
              key={category.title}
              initial={reducedMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.categoryHeading}>
                <span className={styles.number} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{category.title}</h3>
              </div>
              <ul
                className={styles.skills}
                aria-label={`${category.title} skills`}
              >
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
