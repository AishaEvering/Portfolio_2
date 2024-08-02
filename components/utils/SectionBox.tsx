import { CollapsableContent } from "./CollapsableContent";
import styles from "./sectionbox.module.scss";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
  children: JSX.Element;
  id: number;
  expanded: false | number;
  isLoading: boolean;
  reset: boolean;
  onExpandedChange: (loading: false | number) => void;
}

export const SectionBox = ({
  id,
  expanded,
  onExpandedChange,
  title,
  subtitle,
  isLoading,
  reset,
  children,
}: Props) => {
  const isOpen = id === expanded;

  return (
    <>
      <fieldset className={styles.container}>
        <legend className={styles.legend}>{title}</legend>
        <div className={styles.header}>
          <span className={styles.subTitle}>
            {reset ? "" : isLoading ? "Loading..." : subtitle}
          </span>
          {reset
            ? ""
            : subtitle &&
              isLoading == false && (
                <motion.button
                  initial={false}
                  animate={{ color: isOpen ? "#c3c4c3" : "#E118B2" }}
                  onClick={() => onExpandedChange(isOpen ? false : id)}
                  className={styles.linkButton}
                >
                  (see details)
                </motion.button>
              )}
        </div>
        <AnimatePresence initial={false}>
          {isOpen && isLoading == false && reset == false && (
            <motion.section
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <CollapsableContent>
                <div className={styles.content}>{children}</div>
              </CollapsableContent>
            </motion.section>
          )}
        </AnimatePresence>
      </fieldset>
    </>
  );
};
