import { Client } from "@gradio/client";
import {useEffect, useState} from "react";
import { Prediction } from "./predictionUtls";


  
const useArtGeek = (imageFile?: File | null) => {
    const [data, setData] = useState<Prediction | null>(null);
    const [error, setError] = useState<string>("");
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (imageFile == null) {
            setData(null);
            setError("");
            setLoading(false);
            return;
        }

        setLoading(true);
        Client.connect("AishaE/art_geek").then((app) => {
            // get predictions
            app.predict("/predict",{img: imageFile})
            .then((res) => {
                const responseData = res.data as Prediction;
                setData(responseData);
                setLoading(false);
            })
        })
        .catch((err) => {
            setError((err as Error).message);
            setLoading(false);
        });

    }, [imageFile])

    return { data, error, isLoading};
};

export default useArtGeek;