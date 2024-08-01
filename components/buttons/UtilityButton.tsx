import { MouseEventHandler } from "react";
import styles from "./utilitybutton.module.scss";

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
}

export const UtilityButton = ({ children, onClick, isDisabled }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={styles.utilityButton}
    >
      {children}
    </button>
  );
};
