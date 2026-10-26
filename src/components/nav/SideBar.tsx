"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import styles from "./sidebar.module.scss";

type Section = "home" | "work" | "about" | "contact";

const navItems: {
  id: Section;
  label: string;
  href: string;
}[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "work", label: "Work", href: "#work" },
  { id: "about", label: "About", href: "#about" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const SideBar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [selected, setSelected] = useState<Section>("home");

  useEffect(() => {
    if (!isHomePage) {
      setSelected("about");
      return;
    }

    const sections = document.querySelectorAll<HTMLElement>(
      "#home.section-wrapper, #work.section-wrapper, #about.section-wrapper, #contact.section-wrapper",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelected(entry.target.id as Section);
          }
        });
      },
      { threshold: 0.3 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isHomePage]);

  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.sideBar}
    >
      {navItems.map((item, index) => (
        <motion.a
          key={item.id}
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.5,
            delay: index === 0 ? 0.1 : index === 3 ? 0.4 : 0.2,
          }}
          href={
            isHomePage
              ? item.href
              : item.id === "about"
                ? "/about"
                : `/${item.href}`
          }
          onClick={() => setSelected(item.id)}
          className={selected === item.id ? styles.selected : ""}
          aria-current={selected === item.id ? "page" : undefined}
        >
          {item.label}
        </motion.a>
      ))}
    </motion.nav>
  );
};
