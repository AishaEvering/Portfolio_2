"use client";
import styles from "./ballloader.module.scss";

interface Props {
  label?: string;
}

export const BallLoader = ({ label }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.shadow}></div>
      <div className={styles.shadow}></div>
      <div className={styles.shadow}></div>
      <span>{label ? label : "Loading"}</span>
    </div>
  );
};
