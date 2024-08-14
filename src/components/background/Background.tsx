"use client";

import React, { useEffect, useState } from "react";
import styles from "./background.module.scss";
import { useTheme } from "next-themes";

const Background = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Render nothing until mounted

  return (
    <>
      {resolvedTheme === "dark" && (
        <div className={styles.background}>
          <div className={styles.stars} />
          <div className={styles.stars2} />
          <div className={styles.stars3} />
          <div className={styles.stars4} />
        </div>
      )}
    </>
  );
};

export default Background;
