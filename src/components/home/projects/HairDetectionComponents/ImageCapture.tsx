import React, { useEffect, useRef, useState } from "react";
import styles from "./imagecapture.module.scss";
import { FileInputButton } from "@/components/buttons/FileInputButton";
import { BallLoader } from "@/components/ballloader/BallLoader";

interface Props {
  example?: string;
}

export const ImageCapture = ({ example }: Props) => {
  const [fileId, setFileId] = useState("");
  const [showExample, setShowExample] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [resetInput, setResetInput] = useState(false);
  const [loadingExample, setLoadingExample] = useState(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [welcomeMsg, setWelcomeMsg] = useState<string>("Upload Image Here");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setShowExample(false);
      await processFile(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (example) {
      const fileName = example.replace(" ", "_") + ".jpg";
      setFileId(fileName);
      setProcessedImage("");
      setShowExample(true);
      setWelcomeMsg("");
    }
  }, [example]);

  useEffect(() => {
    if (showExample && fileId) {
      setLoadingExample(true);
      const img = new Image();
      img.src = `/api/process_example_image?file_id=${fileId}`;
      img.onload = () => {
        setProcessedImage(img.src);
        setLoadingExample(false);
        setResetInput(true);
      };
      img.onerror = () => {
        console.error("Failed to load example image.");
        setLoadingExample(false);
      };
    }
  }, [showExample, fileId]);

  const processFile = async (file: File) => {
    const files: string[] = [
      "image/png",
      "image/jpeg",
      "image/jpg",
      "image/webp",
    ];

    if (file && files.includes(file.type)) {
      setUploading(true);
      setWelcomeMsg("Uploading");

      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch("/api/process_image", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const blob = await response.blob();
          const imageUrl = URL.createObjectURL(blob);
          setProcessedImage(imageUrl);
        } else {
          const errorText = await response.text();
          console.error(`Error: ${errorText}`);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        setWelcomeMsg("Upload Failed Please Try Again");
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgwrapper}>
        <img
          className={styles.imgplaceholder}
          src="/project-imgs/camera.jpeg"
          alt="Camera"
        />
        <span className={styles.welcomemsg}>{welcomeMsg}</span>
        {uploading && <BallLoader label="Image" />}
        {loadingExample && <BallLoader label="Loading Example" />}
        {showExample && !loadingExample && processedImage && (
          <div>
            <img
              id="processedExampleImage"
              src={processedImage}
              alt="Processed Example Image"
              className={styles.image}
            />
          </div>
        )}
        {processedImage && !loadingExample && (
          <div>
            <img
              id="processedImage"
              src={processedImage}
              alt="Processed Image"
              className={styles.image}
            />
          </div>
        )}
      </div>
      <div className={styles.btnwrapper}>
        <FileInputButton
          reset={resetInput}
          accept="image/png, image/jpeg, image/jpg, image/webp"
          label="Upload Image"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};
