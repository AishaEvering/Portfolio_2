"use client";
import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <div className={styles.links}>
        <MyLinks />
      </div>
      <div className={styles.switcher_container}>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
