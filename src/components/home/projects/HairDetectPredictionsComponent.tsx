import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./predictionsdisplay.module.scss";
import { VideoCapture } from "./HairDetectionComponents/VideoCapture";
import { BiCameraHome } from "react-icons/bi";
import { FaRegImage } from "react-icons/fa";
import { PiVideoBold } from "react-icons/pi";
import { ImageCapture } from "./HairDetectionComponents/ImageCapture";
import { WebcamCapture } from "./HairDetectionComponents/WebcamCapture";
import { IMAGE, VIDEO, WEBCAM } from "@/components/utils/HelperData";

interface Props {
  onViewChange: (view: string) => void;
  example?: string;
}

export const HairDetectPredictionsDisplay = ({
  onViewChange,
  example,
}: Props) => {
  const [selected, setSelected] = useState(IMAGE);
  const [imageExample, setImageExample] = useState("");
  const [videoExample, setVideoExample] = useState("");

  useEffect(() => {
    if (example) {
      if (selected === IMAGE) {
        setImageExample(example);
      } else if (selected === VIDEO) {
        setVideoExample(example);
      }
    }
  }, [example]);

  const handleViewChange = (view: string) => {
    setSelected(view);
    onViewChange(view);
  };

  return (
    <>
      {selected === IMAGE && <ImageCapture example={imageExample} />}
      {selected === VIDEO && <VideoCapture example={videoExample} />}
      {selected === WEBCAM && <WebcamCapture />}

      <div className={styles.hairdetectionBtns}>
        <button
          onClick={() => handleViewChange(IMAGE)}
          className={styles.hairdetectionimg_btn}
        >
          <FaRegImage
            size="2.4rem"
            className={
              selected === IMAGE
                ? `${styles.hairdetectionimg_icon} ${styles.hairdetectionimg_icon_selected}`
                : styles.hairdetectionimg_icon
            }
          />
        </button>
        <button
          onClick={() => handleViewChange(VIDEO)}
          className={styles.hairdetectionimg_btn}
        >
          <PiVideoBold
            size="2.4rem"
            className={
              selected === VIDEO
                ? `${styles.hairdetectionimg_icon} ${styles.hairdetectionimg_icon_selected}`
                : styles.hairdetectionimg_icon
            }
          />
        </button>
        <button
          onClick={() => handleViewChange(WEBCAM)}
          className={styles.hairdetectionimg_btn}
        >
          <BiCameraHome
            size="2.4rem"
            className={
              selected === WEBCAM
                ? `${styles.hairdetectionimg_icon} ${styles.hairdetectionimg_icon_selected}`
                : styles.hairdetectionimg_icon
            }
          />
        </button>
      </div>
    </>
  );
};
