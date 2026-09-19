"use client";
import styles from "./header.module.scss";
import { Reveal } from "./Reveal";

interface Props {
  title: string;
  dir?: "l" | "r";
  accent?: string;
}

export const SectionHeader = ({ title, dir = "r", accent }: Props) => {
  return (
    <div
      className={styles.sectionHeader}
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    >
      <div className={styles.line} />
      <h3>
        <Reveal>
          <span className={styles.title}>
            {title}
            <span style={accent ? { color: accent } : undefined}>.</span>
          </span>
        </Reveal>
      </h3>
    </div>
  );
};
