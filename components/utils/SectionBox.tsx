import styles from "./sectionbox.module.scss";

interface Props {
  title: string;
  subtitle?: string;
  inBorder?: boolean;
  children: JSX.Element;
}

export const SectionBox = ({ title, subtitle, inBorder, children }: Props) => {
  return (
    <>
      {inBorder ? (
        <fieldset className={styles.container}>
          <legend className={styles.legend}>{title}</legend>
          <span className={styles.subTitle}>{subtitle}</span>
          <div className={styles.content}>{children}</div>
        </fieldset>
      ) : (
        <div className={styles.container}>
          <span className={styles.innerTitle}>{title}</span>
          <div className={styles.content}>{children}</div>
        </div>
      )}
    </>
  );
};
