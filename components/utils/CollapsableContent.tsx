import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./collapsablecontent.module.scss";

interface Props {
  children: JSX.Element;
}

export const CollapsableContent = ({ children }: Props) => (
  <AnimatePresence>
    <motion.section
      key="content"
      initial="collapsed"
      animate="open"
      exit="collapsed"
      variants={{
        open: { opacity: 1, height: "auto" },
        collapsed: { opacity: 0, height: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={styles.contentPlaceholder}
      >
        <div className={styles.content}>{children}</div>
      </motion.div>
    </motion.section>
  </AnimatePresence>
);
