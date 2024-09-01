import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import styles from "./webcamcapture.module.scss";
import { LoadingButton } from "@/components/buttons/LoadingButton";

export const WebcamCapture = () => {
  const webcamRef = useRef<Webcam>(null);
  const [streaming, setStreaming] = useState(false);
  const [processedFrames, setProcessedFrames] = useState<string[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isCameraOn, setIsCameraOn] = useState(true);

  const MAX_DETECTION_TIME = 30000;
  const API_URL = "/api/process_frame";

  const processDetectionOnFrame = useCallback(async () => {
    // if we have a camera
    if (webcamRef.current && streaming) {
      // get a screenshot
      const imageSrc = webcamRef.current.getScreenshot();
      // if we have a screenshot
      if (imageSrc) {
        // convert base64 image to Blob
        const response = await fetch(imageSrc);
        const blob = await response.blob();

        // Create FormData and append the blob
        const formData = new FormData();
        formData.append("frame", blob, "frame.jpg");

        try {
          const apiResponse = await axios.post(API_URL, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            responseType: "blob",
          });

          const updatedImageBlob = apiResponse.data;
          const updatedImageUrl = URL.createObjectURL(updatedImageBlob);

          setProcessedFrames((prevFrames) => {
            // Maintain a maximum number of frames
            const newFrames = [...prevFrames, updatedImageUrl];
            return newFrames.length > 10 ? newFrames.slice(1) : newFrames;
          });
        } catch (error) {
          console.error("Error sending frame:", error);
        }
      }
    }
  }, [streaming]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (streaming) {
      interval = setInterval(processDetectionOnFrame, 1000);

      timeoutRef.current = setTimeout(() => {
        setStreaming(false);
        setIsCameraOn(false);
      }, MAX_DETECTION_TIME);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [streaming, processDetectionOnFrame]);

  const handleStreamBtnClick = () => {
    setStreaming(!streaming);
    setIsCameraOn(!streaming);
  };

  return (
    <div className={styles.container}>
      <div className={styles.camwrapper}>
        <img
          className={styles.cameraplaceholder}
          src="/project-imgs/camera.jpeg"
          alt="Camera"
        />
        {isCameraOn && (
          <Webcam
            audio={false}
            ref={webcamRef}
            className={styles.camera}
            screenshotFormat="image/jpeg"
          />
        )}
        {processedFrames.length > 0 && (
          <img
            className={styles.camoverlay}
            src={processedFrames[processedFrames.length - 1]}
            alt="Processed"
          />
        )}
      </div>
      <div className={styles.btnwrapper}>
        <LoadingButton
          isLoading={streaming}
          label="Start Detecting"
          loading_label="Stop Detecting"
          onClick={handleStreamBtnClick}
        />
      </div>
    </div>
  );
};
