import React, { useEffect, useState } from "react";
import styles from "./themeswitcher.module.scss";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme) {
      const isDarkTheme = theme === "dark";
      setIsChecked(isDarkTheme);
    }
  }, []);

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = event.target.checked ? "dark" : "light";
    setIsChecked(event.target.checked);
    setTheme(newTheme);
  };

  return (
    <>
      <div className={styles.toggle}>
        <input
          className={styles.toggle_input}
          type="checkbox"
          checked={isChecked}
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
