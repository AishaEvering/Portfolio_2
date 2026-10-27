"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./aboutSectionNav.module.scss";

const sections = [
  { id: "journey-chapters", label: "My Journey" },
  { id: "beyond-the-screen", label: "Beyond the Screen" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
];

export function AboutSectionNav() {
  const [active, setActive] = useState(sections[0].id);
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const update = () => {
      const journey = document.getElementById("journey-chapters");
      if (!journey) return;

      // The menu appears only once the first Journey chapter reaches the viewport.
      // Keep it out of the hero and the photographic introduction.
      const atJourney =
        journey.getBoundingClientRect().top <= window.innerHeight * 0.72;
      setVisible(atJourney);
      if (!atJourney) return;

      const threshold = 190;
      let current = sections[0].id;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= threshold) {
          current = section.id;
        }
      }
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav
      className={`${styles.nav} ${visible ? styles.visible : ""} ${mobileOpen ? styles.mobileOpen : ""}`}
      aria-label="About page sections"
      aria-hidden={!visible}
      inert={!visible}
    >
      <button
        type="button"
        className={styles.mobileToggle}
        aria-expanded={mobileOpen}
        aria-controls="about-section-links"
        onClick={() => setMobileOpen((open) => !open)}
      >
        <span>{sections.find((section) => section.id === active)?.label ?? "Explore About"}</span>
        <span className={styles.chevron} aria-hidden="true">{mobileOpen ? "⌃" : "⌄"}</span>
      </button>
      <div className={styles.inner}>
        <div id="about-section-links" className={styles.links}>
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`${styles.link} ${active === section.id ? styles.active : ""}`}
              aria-current={active === section.id ? "location" : undefined}
              onClick={() => { setActive(section.id); setMobileOpen(false); }}
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
