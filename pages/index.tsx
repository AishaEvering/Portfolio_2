import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Aisha Evering | Software Engineer</title>
        <meta
          name="description"
          content="Showcasing a blend of practical expertise and innovative models, my portfolio highlights my journey through data science and machine learning with interactive apps and real-world solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
