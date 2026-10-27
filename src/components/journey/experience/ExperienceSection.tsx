"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./experienceSection.module.scss";

type Role = {
  company: string;
  title: string;
  years: string;
  location: string;
  summary: string;
  details: string[];
  technologies: string[];
};

const roles: Role[] = [
  {
    company: "Workiva",
    title: "Software Engineer",
    years: "2019–2023",
    location: "Scottsdale, AZ",
    summary:
      "Built and maintained customer facing SaaS functionality, customizable interfaces, and structured data workflows.",
    details: [
      "Developed features for a large-scale production SaaS platform, translating product requirements into maintainable application functionality.",
      "Worked with Dart-based frontend components and JSON serialization to support customizable user interfaces.",
      "Collaborated with cross-functional Agile teams to design, test, troubleshoot, and deliver production software.",
    ],
    technologies: ["Dart", "JavaScript", "JSON", "Agile"],
  },
  {
    company: "US Airways / American Airlines",
    title: "Software Developer",
    years: "2010–2019",
    location: "Phoenix / Tempe, AZ",
    summary:
      "Developed and supported high-traffic airline websites through a major merger and evolving technology stacks.",
    details: [
      "Built and maintained functionality for USAirways.com and AA.com across frontend and backend systems.",
      "Adapted from C#, ASP.NET, and jQuery to Java and Spring as platforms evolved after the merger.",
      "Contributed to enterprise integration, testing, modernization, and production support with distributed teams.",
    ],
    technologies: [
      "C#",
      "ASP.NET",
      "jQuery",
      "Java",
      "Spring",
      "Serenity",
      "Cucumber",
    ],
  },
  {
    company: "Royal Neighbors of America",
    title: "Software Developer",
    years: "2008–2010",
    location: "Mesa, AZ",
    summary:
      "Created desktop and web applications, including an agent document management tool, and contributed to public website redesigns.",
    details: [
      "Designed the Electronic Agent Welcome Kit in WPF, connecting to a WCF service for document updates.",
      "Contributed to the redesign of three public websites and improved Ajax interactions.",
      "Analyzed legacy applications and trained business users on Sitefinity CMS.",
    ],
    technologies: ["C#", "WPF", "WCF", "ASP.NET", "Ajax"],
  },
  {
    company: "Flypaper Studios",
    title: "Software Developer",
    years: "2007–2008",
    location: "Phoenix, AZ",
    summary:
      "Developed interactive web and Windows applications, including the Flypaper Dashboard.",
    details: [
      "Built and maintained customer facing applications using Flex 3, ActionScript, C#, and ASP.NET.",
      "Developed the Flypaper Dashboard using the Cairngorm pattern, adding features and reusable components.",
    ],
    technologies: ["Flex 3", "ActionScript", "C#", "ASP.NET"],
  },
  {
    company: "Altour Incentive Management",
    title: "Senior Software Developer",
    years: "2006–2007",
    location: "Phoenix, AZ",
    summary:
      "Built and supported business web applications and helped teammates adopt .NET and object-oriented practices.",
    details: [
      "Developed three-tier web applications and improved legacy ASP interfaces with Ajax.",
      "Managed deployments, troubleshot existing systems, and provided .NET and OOP training to colleagues.",
    ],
    technologies: ["C#", "ASP.NET", "Ajax", ".NET"],
  },
  {
    company: "Intel",
    title: "Programmer / Analyst",
    years: "2000–2006",
    location: "Chandler, AZ",
    summary:
      "Designed, developed, and supported business applications, services, and database solutions across multiple technologies.",
    details: [
      "Built ASP.NET and Ruby applications, C# services, SQL databases, and data-processing packages.",
      "Gathered requirements, designed solutions, documented and deployed systems, and provided training and third-level support.",
    ],
    technologies: ["C#", "ASP.NET", "Ruby", "SQL", "T-SQL", "Visual Basic"],
  },
];

export function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className={styles.section}
      aria-labelledby="experience-title"
    >
      <div className={styles.inner}>
        <header className={styles.heading}>
          <p className={styles.kicker}>THE WORK / EXPERIENCE</p>
          <h2 id="experience-title">
            Built through <em>experience.</em>
          </h2>
          <p>
            More than two decades of building software, adapting to new
            technologies, and solving real problems.
          </p>
        </header>

        <div className={styles.timeline}>
          {roles.map((role, index) => {
            const isOpen = expanded === index;
            const detailsId = `experience-details-${index}`;
            return (
              <motion.article
                key={`${role.company}-${role.years}`}
                className={`${styles.role} ${index < 2 ? styles.featured : ""}`}
                initial={reducedMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.date}>{role.years}</div>
                <div className={styles.content}>
                  <div className={styles.roleHeader}>
                    <div>
                      <h3>{role.company}</h3>
                      <p className={styles.jobTitle}>
                        {role.title} <span aria-hidden="true">·</span>{" "}
                        {role.location}
                      </p>
                    </div>
                    <button
                      type="button"
                      className={styles.toggle}
                      aria-expanded={isOpen}
                      aria-controls={detailsId}
                      onClick={() => setExpanded(isOpen ? null : index)}
                    >
                      {isOpen ? "Less detail" : "Explore role"}
                      <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                    </button>
                  </div>
                  <p className={styles.summary}>{role.summary}</p>
                  {isOpen && (
                    <div id={detailsId} className={styles.expanded}>
                      <ul>
                        {role.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                      <p className={styles.tech}>
                        {role.technologies.join(" · ")}
                      </p>
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
