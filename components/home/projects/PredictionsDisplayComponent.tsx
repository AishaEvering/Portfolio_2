import React, { useEffect } from "react";
import { Text } from "@chakra-ui/react";
import styles from "./predictionsdisplay.module.scss";
import useArtGeek from "@/hooks/useArtGeek";
import { Loader } from "@/components/utils/Loader";
import { SectionBox } from "@/components/utils/SectionBox";
import { ProgressBar } from "@/components/utils/ProgressBar";
import { LabelPredictionDisplay } from "./LabelPredictionsDisplayComponent";

type Prediction = {
  label: string | null;
  confidence: number;
};

interface PredictionsDisplayProps {
  imageFile: File | null;
  onLoadingChange: (loading: boolean) => void; // Ensure proper type
}

export const PredictionsDisplay = ({
  imageFile,
  onLoadingChange,
}: PredictionsDisplayProps) => {
  const { data, error, isLoading } = useArtGeek(imageFile);

  useEffect(() => {
    onLoadingChange(isLoading); // Notify parent of loading state
  }, [isLoading, onLoadingChange]);

  if (error) return <Text>{error}</Text>;

  return (
    <div className={styles.predictionsContainer}>
      {isLoading ? (
        <Loader />
      ) : data && (data as any).length > 0 ? (
        <div>
          <LabelPredictionDisplay title="Genre" data={(data as any)[0]} />
          <LabelPredictionDisplay title="Style" data={(data as any)[1]} />
          <SectionBox title="Prediction time (seconds)">
            <div>{(data as any)[2]}</div>
          </SectionBox>
        </div>
      ) : (
        <div className={styles.placeholder}>
          <Text>
            No predictions available. Please upload an image and click predict.
          </Text>
        </div>
      )}
    </div>
  );
};
