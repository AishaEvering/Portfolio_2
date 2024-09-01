"use client";
import { ChangeEventHandler, useEffect, useRef } from "react";
import { FaUpload } from "react-icons/fa";
import styles from "./fileinputbutton.module.scss";

interface Props {
  accept: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  isDisabled?: boolean;
  label?: string;
  reset?: boolean;
}

export const FileInputButton = ({
  onChange,
  isDisabled,
  accept,
  label,
  reset,
}: Props) => {
  const labelClass = isDisabled
    ? `${styles.label} ${styles.disabled}`
    : styles.label;

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (reset && fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [reset]);

  return (
    <>
      <input
        id="uploadBtn"
        type="file"
        ref={fileInputRef}
        accept={accept}
        disabled={isDisabled}
        className={styles.fileInputButton}
        onChange={onChange}
      />
      <label className={labelClass} htmlFor="uploadBtn">
        <FaUpload className={styles.icon} />
        {label ? label : "Upload File"}
      </label>
    </>
  );
};
