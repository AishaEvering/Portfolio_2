import React, { useState } from "react";
import styles from "./predictionsdisplay.module.scss";
import useArtGeek from "@/hooks/useArtGeek";
import { LabelPredictionDisplay } from "./LabelPredictionsDisplayComponent";

interface Props {
  imageFile: File | null;
  reset: boolean;
  onError: (error: string) => void;
}

export const ArtGeekPredictionsDisplay = ({
  imageFile,
  reset,
  onError,
}: Props) => {
  const { data, error, isLoading } = useArtGeek(imageFile);

  const [expanded, setExpanded] = useState<false | number>(0);

  if (error) {
    onError(error);
    return null; // Return null to avoid rendering the component when there's an error
  }

  return (
    <div className={styles.predictionsContainer}>
      <LabelPredictionDisplay
        title="Genre"
        data={data && Array.isArray(data) ? data[0] : null}
        id={1}
        reset={reset}
        expanded={expanded}
        isLoading={isLoading}
        onExpandedChange={setExpanded}
      />
      <LabelPredictionDisplay
        title="Style"
        data={data && Array.isArray(data) ? data[1] : null}
        id={2}
        reset={reset}
        expanded={expanded}
        isLoading={isLoading}
        onExpandedChange={setExpanded}
      />
      {data && !isLoading && !reset && (
        <span className={styles.meticMsg}>
          Prediction time (seconds):{" "}
          <b>{Array.isArray(data) ? data[2] : "N/A"}</b>
        </span>
      )}
    </div>
  );
};
