import React, { useEffect, useState } from "react";
import styles from "./background.module.scss";

const Background = () => {
  const [theme, setTheme] = useState<string | null>("light");

  useEffect(() => {
    const handleThemeChange = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setTheme(theme);
      // setTheme(theme === "dark" ? darkThemeImage : lightThemeImage);
    };

    // Initial check
    handleThemeChange();

    // Set up a MutationObserver to watch for changes to the theme attribute
    const observer = new MutationObserver(() => {
      handleThemeChange();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // Clean up the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {theme === "dark" && (
        <div className={styles.background}>
          <section className={styles.wrapper}>
            <div className={styles.stars}></div>
            <div className={styles.stars2}></div>
            <div className={styles.stars3}></div>
            <div className={styles.stars4}></div>
          </section>
        </div>
      )}
    </>
  );
};

export default Background;
