import { Reveal } from "@/components/utils/Reveal";
import styles from "./certifications.module.scss";
import { CollapsableContent } from "@/components/utils/CollapsableContent";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import Link from "next/link";

interface Props {
  title: string;
  img: string;
  issuer: string;
  link: string;
  description: JSX.Element;
  id: number;
  expanded: false | number;
  onExpandedChange: (loading: false | number) => void;
}

export const CertificationItem = ({
  id,
  expanded,
  onExpandedChange,
  title,
  img,
  issuer,
  link,
  description,
}: Props) => {
  const isOpen = id === expanded;

  return (
    <div className={styles.certifications}>
      <div className={styles.heading}>
        <Reveal>
          <span className={styles.title}>
            <Link href={link} target="_blank" rel="nofollow">
              {title}
            </Link>
          </span>
        </Reveal>
        <Reveal>
          <motion.button
            onClick={() => onExpandedChange(isOpen ? false : id)}
            className={styles.linkButton}
          >
            {isOpen ? (
              <FaArrowDown size="2.4rem" color="var(--brand)" />
            ) : (
              <FaArrowRight size="2.4rem" color="var(--brand)" />
            )}
          </motion.button>
        </Reveal>
      </div>

      <div className={styles.heading}>
        <Reveal>
          <Link href={link} target="_blank" rel="nofollow">
            <span className={styles.issuer}>{issuer}</span>
          </Link>
        </Reveal>
      </div>
      {isOpen && (
        <CollapsableContent>
          <>
            <div className={styles.detailsImgContainer}>
              <Link href={link} target="_blank" rel="nofollow">
                <img className={styles.detailsImg} src={img} />
              </Link>
            </div>
            <div className={styles.description}>{description}</div>
          </>
        </CollapsableContent>
      )}
    </div>
  );
};
