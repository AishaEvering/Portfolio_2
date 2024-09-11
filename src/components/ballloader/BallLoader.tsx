"use client";
import styles from "./ballloader.module.scss";

interface Props {
  label?: string;
  showLabel?: boolean;
}

export const BallLoader = ({ label = "Loading", showLabel = true }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.shadow}></div>
      <div className={styles.shadow}></div>
      <div className={styles.shadow}></div>
      {showLabel && <span>{label}</span>}
    </div>
  );
};
