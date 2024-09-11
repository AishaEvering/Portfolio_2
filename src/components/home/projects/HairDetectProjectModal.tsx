"use client";
import styles from "./projectmodal.module.scss";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import React, { useState } from "react";
import { HairDetectPredictionsDisplay } from "./HairDetectPredictionsComponent";
import { PiBookOpenText } from "react-icons/pi";
import { TabComponent } from "@/components/utils/TabComponent";
import { ImageExamples, VideoExamples } from "@/components/utils/HelperData";
import { IMAGE, VIDEO, WEBCAM } from "@/components/utils/HelperData";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  code: string;
  projectLink?: string;
  tech: string[];
  modalContent: JSX.Element;
}

export const HairDetectProjectModal = ({
  modalContent,
  projectLink = "",
  setIsOpen,
  isOpen,
  title,
  code,
  tech,
}: Props) => {
  const [showExamples, setShowExamples] = useState(true);
  const [examples, setExamples] = useState<string[]>(ImageExamples);
  const [example, setExample] = useState<string>("");

  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body!.style.overflowY = "hidden";
    } else {
      body!.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const handleSelectExample = (command: string) => {
    setExample(command);
  };

  const handleViewChange = (view: string) => {
    setShowExamples(view != WEBCAM);

    if (view === VIDEO) {
      setExamples(VideoExamples);
    } else if (view === IMAGE) {
      setExamples(ImageExamples);
    }
  };

  const content = (
    <div className={styles.modal} onClick={() => setIsOpen(false)}>
      <button className={styles.closeModalBtn} onClick={() => setIsOpen(false)}>
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}
      >
        {showExamples && (
          <TabComponent
            title="Examples"
            items={examples}
            withQuotations={false}
            onSelect={handleSelectExample}
          />
        )}
        <div className={styles.appStyles}>
          <HairDetectPredictionsDisplay
            onViewChange={handleViewChange}
            example={example}
          />
        </div>
        <div className={styles.modalContent}>
          <h4>{title}</h4>
          <div className={styles.modalTech}>{tech.join(" - ")}</div>

          <div className={styles.suppliedContent}>
            {modalContent}
            <p>
              For a comprehensive overview of the decisions I made, the
              challenges I faced, and the lessons I learned, please refer to the
              full
              <span className={styles.readme}>
                <a target="_blank" rel="nofollow" href={code}>
                  <PiBookOpenText size="2.0rem" color="var(--brand)" />
                  ReadMe
                </a>
              </span>
              .
            </p>
          </div>

          <div className={styles.modalFooter}>
            <p className={styles.linksText}>
              Project Links<span>.</span>
            </p>
            <div className={styles.links}>
              <Link target="_blank" rel="nofollow" href={code}>
                <AiFillGithub /> source code
              </Link>
              {projectLink && (
                <Link target="_blank" rel="nofollow" href={projectLink}>
                  <AiOutlineExport /> live project
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return null;

  return ReactDOM.createPortal(content, document.getElementById("root")!);
};
