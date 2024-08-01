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
import { createFileFromPath } from "@/components/utils/createFileFromPath";
import { PredictionsDisplay } from "./PredictionsDisplayComponent";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  code: string;
  projectLink?: string;
  tech: string[];
  modalContent: JSX.Element;
}

export const ArtGeekProjectModal = ({
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

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [predictionInput, setPredictionInput] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Handle image drop
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
    },
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setImageFile(file);
      setImageUrl(URL.createObjectURL(file));
    },
  });

  const examples: string[] = [
    "/project-imgs/examples_beach.jpeg",
    "/project-imgs/examples_boats.jpeg",
    "/project-imgs/examples_flowers.png",
    "/project-imgs/examples_Mona.png",
    "/project-imgs/examples_portrait.jpeg",
  ];

  const handlePredict = () => {
    if (imageFile == null) return;
    setPredictionInput(imageFile);
  };

  async function fetchImage(url: string): Promise<File | null> {
    let retVal: File | null = null;

    try {
      retVal = await createFileFromPath(url, "tempImg");
    } catch (error) {
      console.error("Error creating file from path:", error);
    }

    return retVal;
  }

  const handleExample = async (url: string) => {
    setImageUrl(url);

    try {
      const file = await fetchImage(url);

      if (file !== null) {
        setImageFile(file);
      }
    } catch (error) {
      console.error("Error handling example:", error);
    }
  };

  const handleClearImg = () => {
    setImageUrl("");
    setImageFile(null);
  };

  const handleLoadingChange = (loading: boolean) => {
    setIsLoading(loading);
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
        <div className={styles.appStyles}>
          <div className={styles.predContainer}>
            <div className={styles.predChild}>
              {/* Drag-and-Drop Area */}
              <div {...getRootProps()} className={styles.dropzoneStyles}>
                <input {...getInputProps()} />
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="Uploaded"
                    className={styles.imageStyles}
                  />
                ) : (
                  <p>Drag and drop an image here, or click to select one</p>
                )}
              </div>
              <UtilityButton onClick={handleClearImg}>Clear</UtilityButton>
              <UtilityButton onClick={handlePredict}>Predict</UtilityButton>
            </div>
            <PredictionsDisplay
              imageFile={predictionInput}
              onLoadingChange={handleLoadingChange}
            ></PredictionsDisplay>
          </div>
          {/* Example Inputs */}
          <div className={styles.examplesStyles}>
            <p>Examples:</p>
            <div className={styles.examplesImages}>
              {examples.map((path) => (
                <ImageButton
                  onClick={() => {
                    handleExample(path);
                  }}
                  imageurl={path}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.modalContent}>
          <h4>{title}</h4>
          <div className={styles.modalTech}>{tech.join(" - ")}</div>

          <div className={styles.suppliedContent}>{modalContent}</div>

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
