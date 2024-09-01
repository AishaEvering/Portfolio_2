"use client";
import { MouseEventHandler } from "react";
import styles from "./loadingbutton.module.scss";

interface Props {
  label: string;
  loading_label: string;
  isLoading: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

export const LoadingButton = ({
  label,
  loading_label,
  isLoading,
  onClick,
  isDisabled,
  type,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={
        isLoading
          ? `${styles.loadingButton} ${styles.loading}`
          : styles.loadingButton
      }
    >
      {isLoading ? loading_label : label}
    </button>
  );
};
