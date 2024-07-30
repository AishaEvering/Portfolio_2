import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
    </header>
  );
};
