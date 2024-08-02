import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import styles from "./predictionsdisplay.module.scss";
import useArtGeek from "@/hooks/useArtGeek";
import { LabelPredictionDisplay } from "./LabelPredictionsDisplayComponent";

interface PredictionsDisplayProps {
  imageFile: File | null;
  reset: boolean;
}

export const PredictionsDisplay = ({
  imageFile,
  reset,
}: PredictionsDisplayProps) => {
  const { data, error, isLoading } = useArtGeek(imageFile);

  const [expanded, setExpanded] = useState<false | number>(0);

  if (error) return <Text>{error}</Text>;

  return (
    <div className={styles.predictionsContainer}>
      <LabelPredictionDisplay
        title="Genre"
        data={data != null ? (data as any)[0] : null}
        id={1}
        reset={reset}
        expanded={expanded}
        isLoading={isLoading}
        onExpandedChange={setExpanded}
      />
      <LabelPredictionDisplay
        title="Style"
        data={data != null ? (data as any)[1] : null}
        id={2}
        reset={reset}
        expanded={expanded}
        isLoading={isLoading}
        onExpandedChange={setExpanded}
      />
      {data != null && isLoading == false && reset == false && (
        <span className={styles.meticMsg}>
          Prediction time (seconds): <b>{(data as any)[2]}</b>
        </span>
      )}
    </div>
  );
};
