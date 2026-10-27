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
];

export const SideBar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/home";

  const [selected, setSelected] = useState<Section>("home");

  useEffect(() => {
    if (!isHomePage) {
      setSelected(pathname.startsWith("/work") ? "work" : "about");
      return;
    }

    const updateActiveSection = () => {
      // Explicitly reset to Home when near the top.
      if (window.scrollY < 100) {
        setSelected("home");
        return;
      }

      const sections: Section[] = ["home", "work", "about"];
      let current: Section = "home";

      for (const id of sections) {
        const element = document.getElementById(id);

        if (element && element.getBoundingClientRect().top <= 180) {
          current = id;
        }
      }

      setSelected(current);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [isHomePage, pathname]);
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
                : `/#${item.id}`
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
