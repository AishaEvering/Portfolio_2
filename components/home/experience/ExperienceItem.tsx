import { Reveal } from "@/components/utils/Reveal";
import styles from "./experience.module.scss";
import { motion } from "framer-motion";
import { CollapsableContent } from "@/components/utils/CollapsableContent";

interface Props {
  title: string;
  position: string;
  time: string;
  location: string;
  description: string;
  tech: string[];
  id: number;
  expanded: false | number;
  onExpandedChange: (loading: false | number) => void;
}

export const ExperienceItem = ({
  id,
  expanded,
  onExpandedChange,
  title,
  position,
  time,
  location,
  description,
  tech,
}: Props) => {
  const isOpen = id === expanded;

  return (
    <div className={styles.experience}>
      <div className={styles.heading}>
        <Reveal>
          <>
            <span className={styles.title}>{title}</span>
            <motion.button
              initial={false}
              animate={{ color: isOpen ? "#c3c4c3" : "#E118B2" }}
              onClick={() => onExpandedChange(isOpen ? false : id)}
              className={styles.linkButton}
            >
              [See details]
            </motion.button>
          </>
        </Reveal>
        <Reveal>
          <span>{time}</span>
        </Reveal>
      </div>

      <div className={styles.heading}>
        <Reveal>
          <span className={styles.position}>{position}</span>
        </Reveal>
        <Reveal>
          <span>{location}</span>
        </Reveal>
      </div>
      {isOpen && (
        <CollapsableContent>
          <>
            <p className={styles.description}>{description}</p>
            <div className={styles.tech}>
              {tech.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </>
        </CollapsableContent>
      )}
    </div>
  );
};
