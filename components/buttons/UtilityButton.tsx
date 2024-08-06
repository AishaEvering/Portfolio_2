import { MouseEventHandler } from "react";
import styles from "./utilitybutton.module.scss";

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

export const UtilityButton = ({
  children,
  onClick,
  isDisabled,
  type,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={styles.utilityButton}
    >
      {children}
    </button>
  );
};
