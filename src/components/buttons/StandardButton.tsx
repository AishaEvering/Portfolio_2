"use client";
import { MouseEventHandler } from "react";
import styles from "./standardbutton.module.scss";

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
}

export const StandardButton = ({ children, onClick, isDisabled }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={styles.standardButton}
    >
      {children}
    </button>
  );
};
