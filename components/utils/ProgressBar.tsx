import styles from "./progressbar.module.scss";

interface Props {
  label: string;
  confidence: number;
}

export const ProgressBar = ({ label, confidence }: Props) => {
  return (
    <>
      <div className={styles.label}>{label || "Unknown"}</div>
      <div className={styles.container}>
        <div
          className={styles.progressBar}
          style={{ width: `${confidence * 100}%` }}
        />
      </div>
      <div className={styles.confidenceValue}>
        {(confidence * 100).toFixed(1)}%
      </div>
    </>
  );
};
