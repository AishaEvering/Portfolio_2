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
  id: number;
  title: string;
  data: DataItem | null;
  expanded: false | number;
  isLoading: boolean;
  reset: boolean;
  onExpandedChange: (loading: false | number) => void;
}

export const LabelPredictionDisplay = ({
  id,
  title,
  data,
  expanded,
  isLoading,
  reset,
  onExpandedChange,
}: Props) => {
  const confidences = (data != null && data.confidences) || [];

  return (
    <>
      <SectionBox
        id={id}
        expanded={expanded}
        onExpandedChange={onExpandedChange}
        title={title}
        subtitle={data != null ? data.label : ""}
        isLoading={isLoading}
        reset={reset}
      >
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
    </>
  );
};
