import useArtGeek from "./useArtGeek";

type ConfidenceDict = {
    label: string | number | null;
    confidence: number | null;
};

type PrimaryDict = {
    label: string | number | null;
    confidences: ConfidenceDict[] | null;
};


export interface Prediction{
    genre: PrimaryDict;
    style: PrimaryDict;
    time: ConfidenceDict;
}