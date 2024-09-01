import React, { useEffect, useRef, useState } from "react";
import styles from "./videocapture.module.scss";
import { FileInputButton } from "@/components/buttons/FileInputButton";
import { LoadingButton } from "@/components/buttons/LoadingButton";
import { BallLoader } from "@/components/ballloader/BallLoader";

interface Props {
  example?: string;
}

export const VideoCapture = ({ example }: Props) => {
  const [fileId, setFileId] = useState("");
  const [showExample, setShowExample] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [resetInput, setResetInput] = useState(false);
  const [startDetecting, setStartDetecting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [welcomeMsg, setWelcomeMsg] = useState<string>("Upload Video Here");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setShowExample(false);
      await processFile(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (example) {
      const fileName = example.replace(" ", "_") + ".mp4";
      setFileId(fileName);
      setShowExample(true);
      setStartDetecting(true);
      setWelcomeMsg("");
    }
  }, [example]);

  const handleDetection = () => {
    setStartDetecting(true);
    setWelcomeMsg("");
  };

  const processFile = async (file: File) => {
    if (file && file.type === "video/mp4") {
      setUploading(true);
      setStartDetecting(false);
      setWelcomeMsg("Uploading");

      const formData = new FormData();
      formData.append("video", file);

      try {
        const response = await fetch("/api/upload_video", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (response.ok) {
          setFileId(data.file_id);
        } else {
          console.error(data.error);
        }
        setWelcomeMsg("Click Start Detecting");
      } catch (error) {
        console.error("Error uploading file:", error);
        setWelcomeMsg("Upload Failed Please Try Again");
      } finally {
        setUploading(false);
      }
    }
  };

  useEffect(() => {
    const img = document.getElementById("videoStream");

    if (img) {
      img.onload = () => {
        const progressHeader = img.getAttribute("data-progress");
        if (progressHeader) {
          setProgress(parseInt(progressHeader, 10));
        }
      };
    }
  }, []);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await fetch(
          `/api/stream_frames_progress?file_id=${fileId}`
        );
        const data = await response.json();
        setProgress(data.progress);

        // Check if progress is complete
        if (data.progress === 100) {
          setStartDetecting(false);
          setWelcomeMsg("Processing Complete. Upload New Video.");
          setFileId("");
          setShowExample(false);
          setResetInput(true);
        }
      } catch (error) {
        console.error("Error fetching progress:", error);
      }
    };

    if (fileId) {
      const interval = setInterval(fetchProgress, 1000); // Poll every second
      return () => clearInterval(interval);
    }
  }, [fileId]);

  return (
    <div className={styles.container}>
      <div className={styles.vidwrapper}>
        <img
          className={styles.vidplaceholder}
          src="/project-imgs/camera.jpeg"
          alt="Camera"
        />
        <span className={styles.welcomemsg}>{welcomeMsg}</span>
        {uploading && <BallLoader label="Video" />}
        {startDetecting && (
          <div>
            {showExample ? (
              <img
                id="videoStream"
                src={`/api/stream_example_frames?file_id=${fileId}`}
                alt="Processed Frame"
                className={styles.video}
              />
            ) : (
              <img
                id="videoStream"
                src={`/api/stream_frames?file_id=${fileId}`}
                alt="Processed Frame"
                className={styles.video}
              />
            )}
            <p>
              <progress
                className={styles.progressbar}
                value={progress}
                max={100}
              />
            </p>
          </div>
        )}
      </div>
      <div className={styles.btnwrapper}>
        <FileInputButton
          reset={resetInput}
          isDisabled={startDetecting}
          accept="video/mp4"
          label="Upload Video"
          onChange={handleFileChange}
        />
        <LoadingButton
          isDisabled={!fileId || startDetecting}
          onClick={handleDetection}
          isLoading={startDetecting}
          label="Start Detecting"
          loading_label="Detecting"
        />
      </div>
    </div>
  );
};
