import React from "react";
import { SectionBox } from "@/components/utils/SectionBox";
import { ProgressBar } from "@/components/utils/ProgressBar";

type Confidence = {
  label: string;
  confidence: number;
};

type DataItem = {
  label: string;
  confidences: Confidence[];
};

interface Props {
  title: string;
  data: DataItem | null;
}

export const LabelPredictionDisplay = ({ title, data }: Props) => {
  if (!data) {
    return <div>No data available</div>;
  }

  const confidences = data.confidences || [];

  return (
    <SectionBox title={title} subtitle={data.label} inBorder>
      {confidences.length > 0 ? (
        <div>
          {confidences.map((confidence, index) => (
            <div key={index}>
              <ProgressBar
                label={confidence.label}
                confidence={confidence.confidence}
              />
            </div>
          ))}
        </div>
      ) : (
        <div>No confidences available</div>
      )}
    </SectionBox>
  );
};
