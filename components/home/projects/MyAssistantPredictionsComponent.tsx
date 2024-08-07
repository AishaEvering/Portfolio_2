import styles from "./predictionsdisplay.module.scss";
import useMyAssistant from "@/hooks/useMyAssistant";
import { CommandPredictionImgs } from "@/components/utils/HelperData";
import { motion } from "framer-motion";

interface Props {
  command: string | null;
  reset: boolean;
}

export const MyAssistantPredictionsDisplay = ({ command, reset }: Props) => {
  const { data, error, isLoading } = useMyAssistant(command);

  const errorImg = "/project-imgs/pop_art_error.jpeg";

  function getRandomImage(prediction: string): string | null {
    if (CommandPredictionImgs.length === 0 || prediction.length == 0)
      return errorImg;

    const formattedPrediction: string = prediction
      .toLocaleLowerCase()
      .replace(/ /g, "_");

    const matchingImages = CommandPredictionImgs.filter((image) =>
      image.includes(formattedPrediction)
    );

    const randomIndex = Math.floor(Math.random() * matchingImages.length);
    return matchingImages[randomIndex];
  }

  return (
    <div className={styles.assistant_container}>
      <img
        className={styles.assistant_background}
        src="/project-imgs/pop_art_background.avif"
        alt="Assistant Background"
      />
      {error ? (
        <img
          className={styles.assistant_error}
          src={errorImg}
          alt="Assistant App Error"
        />
      ) : (
        <>
          {data != null && isLoading == false && reset == false && (
            <>
              <motion.div
                className={styles.assistant_predictionContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <span className={styles.assistant_predictionLabel}>
                  {(data as any)[0]}
                </span>
                <img
                  className={styles.assistant_predImg}
                  src={getRandomImage((data as any)[0]) || ""}
                  alt="Predicted Intent Img"
                />
              </motion.div>
              <span className={styles.assistant_meticMsg}>
                Prediction time (seconds): <b>{(data as any)[1]}</b>
              </span>
            </>
          )}
          {isLoading == true && (
            <span className={styles.assistant_loading}>Loading</span>
          )}
        </>
      )}
    </div>
  );
};
