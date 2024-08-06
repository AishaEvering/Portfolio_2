import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import styles from "./predictionsdisplay.module.scss";
import { LabelPredictionDisplay } from "./LabelPredictionsDisplayComponent";
import useMyAssistant from "@/hooks/useMyAssistant";

interface Props {
  command: string | null;
  reset: boolean;
}

export const MyAssistantPredictionsDisplay = ({ command, reset }: Props) => {
  // console.log("Command: " + command);
  const { data, error, isLoading } = useMyAssistant(command);

  const [expanded, setExpanded] = useState<false | number>(0);

  if (error) return <Text>{error}</Text>;
  // console.log(data);
  return (
    <div className={styles.predictionsContainer}>
      {/* <LabelPredictionDisplay
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
      /> */}
      {data != null && isLoading == false && reset == false && (
        <span className={styles.meticMsg}>
          Prediction time (seconds): <b>{(data as any)[1]}</b>
        </span>
      )}
    </div>
  );
};
