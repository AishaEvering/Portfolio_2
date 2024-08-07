import styles from "./education.module.scss";

interface Props {
  title: string;
  school: string;
  focus: string;
  time: string;
}

export const Education = ({ title, school, focus, time }: Props) => {
  return (
    <div className={styles.degrees}>
      <div className={styles.title}>{title}</div>
      <div className={styles.schoool}>{school}</div>
      <div className={styles.details}>{focus}</div>
      <div className={styles.details}>{time}</div>
    </div>
  );
};
