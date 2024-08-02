import * as React from "react";
import { motion } from "framer-motion";
import styles from "./collapsablecontent.module.scss";

interface Props {
  children: JSX.Element;
}

export const CollapsableContent = ({ children }: Props) => (
  <motion.div
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.8 }}
    className={styles.contentPlaceholder}
  >
    <div className={styles.content}>{children}</div>
  </motion.div>
);
