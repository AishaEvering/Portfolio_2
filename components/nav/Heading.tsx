import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <div className={styles.switcher_container}>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
