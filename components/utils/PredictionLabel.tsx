import styles from "./sectionbox.module.scss";

interface Props {
  title: string;
  children: JSX.Element;
}

export const SectionBox = ({ title, children }: Props) => {
  return (
    <fieldset className={styles.container}>
      <legend className={styles.legend}>{title}</legend>
      {children}
    </fieldset>
  );
};
