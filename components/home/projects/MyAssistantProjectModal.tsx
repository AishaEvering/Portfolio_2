import styles from "./projectmodal.module.scss";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import React, { useState } from "react";
import { MyAssistantPredictionsDisplay } from "./MyAssistantPredictionsComponent";
import CommandForm from "./CommandInputComponent";
import { TabComponent } from "@/components/utils/TabComponent";
import { CommandExamples } from "@/components/utils/HelperData";
import { PiBookOpenText } from "react-icons/pi";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  code: string;
  projectLink?: string;
  tech: string[];
  modalContent: JSX.Element;
}

export const MyAssistantProjectModal = ({
  modalContent,
  projectLink = "",
  setIsOpen,
  isOpen,
  title,
  code,
  tech,
}: Props) => {
  const [command, setCommand] = useState<string>("");
  const [selectedExample, setSelectedExample] = useState<string>("");
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body!.style.overflowY = "hidden";
    } else {
      body!.style.overflowY = "scroll";
      clearAll();
    }
  }, [isOpen]);

  const handleSubmit = (command: string) => {
    if (command == null) return;
    setReset(false);
    setCommand(command);
  };

  const handleSelectExample = (command: string) => {
    setReset(false);
    setSelectedExample(command);
    setCommand(command);
  };

  const handleClearCommand = () => {
    clearAll();
    setReset(true);
  };

  const clearAll = () => {
    setCommand("");
    setSelectedExample("");
  };

  const content = (
    <div className={styles.modal} onClick={() => setIsOpen(false)}>
      <button className={styles.closeModalBtn}>
        <MdClose />
      </button>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}
      >
        <TabComponent
          title="Examples"
          items={CommandExamples}
          onSelect={handleSelectExample}
        ></TabComponent>
        <div className={styles.appStyles}>
          <div className={styles.my_assistant_containeer}>
            <div className={styles.predContainer}>
              <MyAssistantPredictionsDisplay command={command} reset={reset} />
            </div>
            <CommandForm
              onSubmit={handleSubmit}
              onClear={handleClearCommand}
              initialCommand={selectedExample}
            ></CommandForm>
          </div>
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
              {projectLink.length > 0 && (
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

  if (!isOpen) return <></>;

  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById("root"));
};
