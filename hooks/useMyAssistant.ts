import { Client } from "@gradio/client";
import {useEffect, useState} from "react";


type Response = {
    label: string | null;
    time: number | null;
};


const useMyAssistant = (command?: string | null) => {
    const [data, setData] = useState<Response | null>(null);
    const [error, setError] = useState<string>("");
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (command == "") {
            setData(null);
            setError("");
            setLoading(false);
            return;
        }

        setLoading(true);
        Client.connect("AishaE/My_Assistant").then((app) => {
            // get predictions
            app.predict("/predict",{command: command})
            .then((res) => {
                const responseData = res.data as Response;
                setData(responseData);
                setLoading(false);
            })
        })
        .catch((err) => {
            setError((err as Error).message);
            setLoading(false);
        });

    }, [command])

    return { data, error, isLoading};
};

export default useMyAssistant;