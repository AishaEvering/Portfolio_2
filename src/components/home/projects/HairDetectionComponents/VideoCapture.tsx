import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./videocapture.module.scss";
import { FileInputButton } from "@/components/buttons/FileInputButton";
import { LoadingButton } from "@/components/buttons/LoadingButton";
import { BallLoader } from "@/components/ballloader/BallLoader";

interface Props {
  example?: string;
}

export const VideoCapture = ({ example }: Props) => {
  const [responseId, setResponseId] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetInput, setResetInput] = useState(false);
  const [startDetecting, setStartDetecting] = useState(false);
  const [showFrames, setShowFrames] = useState(false);
  const [progress, setProgress] = useState(0);
  const [welcomeMsg, setWelcomeMsg] = useState<string>("Upload Video Here");
  const [isPollingForFrames, setIsPollingForFrames] = useState<boolean>(false);

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

  const handleDetection = () => {
    setStartDetecting(true);
    setLoading(true);
    setWelcomeMsg("Loading Please Wait");
    setIsPollingForFrames(true);
  };

  const checkForFrames = useCallback(async () => {
    try {
      const response = await fetch(`/api/got_frames?id=${responseId}`);

      if (!response.ok) {
        throw new Error("Failed to fetch frames status");
      }

      const data = await response.json();

      if (data.got_frames) {
        setLoading(false);
        setShowFrames(true);
        setWelcomeMsg("");
        setIsPollingForFrames(false);
      }
    } catch (error) {
      console.error("Error checking for frames: ", error);
    }
  }, [responseId]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      await processFile(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (!isPollingForFrames) return;

    const intervalId = setInterval(() => {
      checkForFrames();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPollingForFrames, checkForFrames]);

  const processFile = async (file: File) => {
    if (file && file.type === "video/mp4") {
      setLoading(true);
      setWelcomeMsg("Uploading Video");
      setStartDetecting(false);

      const formData = new FormData();
      formData.append("video", file);

      try {
        const response = await fetch("/api/upload_video", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        if (response.ok) {
          setResponseId(data.id);
        } else {
          console.error(data.error);
        }
        setWelcomeMsg("Click Start Detecting");
      } catch (error) {
        console.error("Error uploading file:", error);
        setWelcomeMsg("Upload Failed Please Try Again");
        setStartDetecting(false);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const processVideoExample = async (fileName: string) => {
      setLoading(true);
      setWelcomeMsg("Uploading Video");
      setStartDetecting(false);

      try {
        const response = await fetch(
          `/api/process_video_example?id=${fileName}`
        );

        const data = await response.json();
        if (response.ok) {
          setResponseId(data.id); // Setting thread ID returned by the server
          setWelcomeMsg("Click Start Detecting");
        } else {
          console.error(data.error);
          setWelcomeMsg("Upload Failed Please Try Again");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        setWelcomeMsg("Upload Failed Please Try Again");
      } finally {
        setLoading(false);
      }
    };

    if (example) {
      const fileName = example.replace(" ", "_") + ".mp4";
      setResponseId(fileName);
      processVideoExample(fileName);
    }
  }, [example]);

  useEffect(() => {
    const fetchProgress = async () => {
      if (!responseId) return;

      try {
        const response = await fetch(
          `/api/stream_frames_progress?id=${responseId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch progess");
        }

        const data = await response.json();

        setProgress(data.progress);

        if (data.progress == 99) {
          setStartDetecting(false);
          setWelcomeMsg("Processing Complete. Upload New Video.");
          setResponseId("");
          setResetInput(true);
          setShowFrames(false);
          clearInterval(intervalId);
        }
      } catch (error) {
        console.error("Error fetching progress:", error);
      }
    };

    const intervalId = setInterval(fetchProgress, 1000);
    return () => clearInterval(intervalId);
  }, [responseId]);

  return (
    <div className={styles.container}>
      <div className={styles.vidwrapper}>
        <img
          className={styles.vidplaceholder}
          src="/project-imgs/camera.jpeg"
          alt="Camera"
        />
        <span className={styles.welcomemsg}>{welcomeMsg}</span>
        {loading && <BallLoader showLabel={false} />}
        {showFrames && (
          <div>
            <img
              id="videoStream"
              src={`/api/stream_frames?id=${responseId}`}
              alt="Processed Frame"
              className={styles.video}
            />
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
          isDisabled={!responseId || startDetecting}
          onClick={handleDetection}
          isLoading={startDetecting}
          label="Start Detecting"
          loading_label="Detecting"
        />
      </div>
    </div>
  );
};
