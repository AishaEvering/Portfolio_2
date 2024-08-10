import React, { useEffect, useState } from "react";
import styles from "./themeswitcher.module.scss";

export const ThemeSwitcher = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [theme, setTheme] = useState("light");

  const themeAttr: string = "data-theme";

  useEffect(() => {
    const savedTheme = localStorage.getItem(themeAttr);

    if (savedTheme) {
      console.log("Loaded theme: " + savedTheme);
      const isDarkTheme = savedTheme === "dark";
      setIsChecked(isDarkTheme);
      setTheme(savedTheme);
    } else {
      // Default to light theme if no theme is found in local storage
      localStorage.setItem(themeAttr, "light");
      document.documentElement.setAttribute(themeAttr, "light");
    }
  }, []);

  useEffect(() => {
    // Update local storage and document attribute when `theme` changes
    localStorage.setItem(themeAttr, theme);
    document.documentElement.setAttribute(themeAttr, theme);
  }, [theme]);

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = event.target.checked ? "dark" : "light";
    console.log("Pressed: " + newTheme);
    setIsChecked(event.target.checked);
    setTheme(newTheme);
  };

  return (
    <>
      <div className={styles.toggle}>
        <input
          className={styles.toggle_input}
          type="checkbox"
          checked={isChecked} // Ensure the checkbox reflects the current state
          onChange={handleThemeChange}
        />
        <div className={styles.toggle_handle_wrapper}>
          <div className={styles.toggle_handle}>
            <div className={styles.toggle_handle_knob}></div>
            <div className={styles.toggle_handle_bar_wrapper}>
              <div className={styles.toggle_handle_bar}></div>
            </div>
          </div>
        </div>
        <div className={styles.toggle_base}>
          <div className={styles.toggle_base_inside}></div>
        </div>
      </div>
    </>
  );
};
