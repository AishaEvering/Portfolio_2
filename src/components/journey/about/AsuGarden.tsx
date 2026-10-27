import styles from "./asuGarden.module.scss";

export function AsuGarden() {
  return (
    <div className={styles.garden} aria-hidden="true">
      <div className={styles.photo} />
      <div className={styles.overlay} />
    </div>
  );
}
