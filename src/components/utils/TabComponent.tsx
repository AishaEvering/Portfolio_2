"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./tab.module.scss";

interface Props {
  title: string;
  items: string[];
  onSelect: (command: string) => void;
}

export const TabComponent = ({ title, items, onSelect }: Props) => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <>
      <div className={styles.container} ref={menuRef}>
        <div
          className={styles.trigger}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span className={styles.title}>{title}</span>
        </div>
      </div>

      <div
        className={`${styles.dropdownMenu} ${
          open ? styles.active : styles.inactive
        }`}
      >
        <ul className={styles.ddList}>
          {items.map((item, index) => (
            <DropdownItem
              key={index}
              text={item}
              onSelect={() => onSelect(item)}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

interface DropdownItemProps {
  text: string;
  onSelect: () => void;
}

function DropdownItem({ text, onSelect }: DropdownItemProps) {
  return (
    <li className={styles.dropdownItem}>
      <a className={styles.link} onClick={onSelect}>
        <div className={styles.linktext}>&quot;{text}&quot;</div>
      </a>
    </li>
  );
}
