import styles from "./projectmodal.module.scss";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { UtilityButton } from "@/components/buttons/UtilityButton";
import { ImageButton } from "@/components/buttons/ImageButton";
import { Form, FormProvider, useForm } from "react-hook-form";
import { MyAssistantPredictionsDisplay } from "./MyAssistantPredictionsComponent";
import CommandForm from "./CommandInputComponent";
import HookForm from "./CommandInputComponent";
import { TabComponent } from "@/components/utils/TabComponent";
import { Examples } from "@/components/utils/CommandExamples";

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
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body!.style.overflowY = "hidden";
    } else {
      body!.style.overflowY = "scroll";

      const existingElement = document.querySelector("gradio-app");

      if (existingElement) {
        document.body.removeChild(existingElement);
      }
    }
  }, [isOpen]);

  const [command, setCommand] = useState<string>("");
  const [predictionInput, setPredictionInput] = useState<string | null>(null);
  const [selectedExample, setSelectedExample] = useState<string>("");
  const [reset, setReset] = useState(false);

  const methods = useForm();

  const handlePredict = () => {
    if (command == null) return;
    methods.reset();
    setPredictionInput(command);
    setReset(false);
  };

  const handleSubmit = (command: string) => {
    // console.log(command);
    // setCommand("");
    // setReset(true);
  };

  const handleSelectExample = (command: string) => {
    console.log("Sent Parent has value: " + command);
    setSelectedExample(command);
  };

  const handleClearCommand = () => {
    setSelectedExample("");
    setCommand("");
    setReset(true);
    // console.log("Command: " + command);
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
          items={Examples}
          onSelect={handleSelectExample}
        ></TabComponent>
        <div className={styles.appStyles}>
          <div className={styles.predContainer}>
            <div className={styles.predChild}>
              {/* Action Image Area */}
              <div className={styles.actionImgStyles}>
                <span>TBD</span>
              </div>
            </div>
            <MyAssistantPredictionsDisplay command={command} reset={reset} />
          </div>
          <CommandForm
            onSubmit={handleSubmit}
            onClear={handleClearCommand}
            initialCommand={selectedExample}
          ></CommandForm>
          {/* <CommandInputComponent
            onCommand={(commandText: string) => setCommand(commandText)}
          /> */}

          {/* Example Inputs */}
          {/* <div className={styles.examplesStyles}>
            <p>Examples:</p>
            <div className={styles.examplesImages}>
              {examples.map((path, index) => (
                <ImageButton
                  key={index}
                  onClick={() => {
                    handleExample(path);
                  }}
                  imageurl={path}
                />
              ))}
            </div>
          </div> */}
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
                  <img
                    src="/project-imgs/readme.png"
                    className={styles.readMeImg}
                    alt="read me"
                  />
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
