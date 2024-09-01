"use client";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Black Hair Detection",
    projectType: "hair_detect",
    imgSrc: "/project-imgs/hair_detect.jpg",
    code: "https://github.com/AishaEvering/ObjectDetection",
    projectLink:
      "https://universe.roboflow.com/aishas-workspace/black-hair-detection",
    liveDemo: true,
    tech: ["Roboflow", "YOLO", "Flask", "PyTorch", "Python", "Numpy"],
    description:
      "I created a custom dataset using Roboflow to train a YOLOv8 model for detecting and classifying hairstyles commonly seen in Black communities. To showcase this model, I developed a live demo as part of my portfolio, featuring a Flask API for the backend.",
    modalContent: (
      <>
        <p>
          This project focuses on object detection, specifically identifying a
          variety of hairstyles commonly seen in the Black community. I sourced
          and annotated images from the internet using Roboflow, which
          streamlined the entire process—from data storage and annotation to
          model training. The hairstyles detected by the model include afros,
          bantu knots, bobs, braids, cornrows, fades, locs, long hair,
          sisterlocs, and TWAs (teeny weeny afros).
        </p>
        <p>
          The live demo above features a custom React interface that interacts
          with my trained model for real-time inference via my Flask API hosted
          on Vercel.
        </p>
        <p>
          To explore my custom dataset or review the model's performance
          metrics, visit my project on
          <a
            target="_blank"
            rel="nofollow"
            href="https://universe.roboflow.com/aishas-workspace/black-hair-detection"
          >
            Roboflow Universe
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "About Buzz",
    projectType: "default",
    imgSrc: "/project-imgs/buzz_lightyear.png",
    code: "https://github.com/AishaEvering/Portfolio_2",
    projectLink: "",
    liveDemo: false,
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Sass",
      "Redis",
      "OpenAI",
      "LangChain",
      "DataStax",
    ],
    description:
      "A Retrieval-Augmented Generation (RAG) chatbot system designed to answer questions about my portfolio.",
    modalContent: (
      <>
        <p>
          My portfolio is a Next.js application built with React, featuring some
          notable highlights. First, I recreated the Gradio UI in React, making
          the custom UIs for the projects with live demos look better, more
          convenient, and even fun. Second, I developed a comprehensive
          Retrieval-Augmented Generation (RAG) chatbot system designed to answer
          questions about my portfolio. This system, named Buzz Lightyear,
          integrates OpenAI's ChatGPT for generating responses and a retrieval
          mechanism to fetch relevant information, showcasing the advanced
          capabilities of my work.
        </p>
      </>
    ),
  },
  {
    title: "Art Geek",
    projectType: "art_geek",
    imgSrc: "/project-imgs/Mona.png",
    code: "https://github.com/AishaEvering/Art_Geek",
    projectLink: "https://aishae-art-geek.hf.space",
    liveDemo: true,
    tech: ["PyTorch", "Python", "Pandas", "Numpy", "Matplotlib"],
    description:
      "A refined Vision Transformer (ViT) feature extractor model for computer vision that accurately predicts the genre and style of art pieces.",
    modalContent: (
      <>
        <p>
          I&apos;m diving into the world of art classification with cutting-edge
          neural networks! This project leverages the diverse WikiArt dataset
          from Hugging Face to train models that classify artworks into multiple
          categories, including genre and style. Unlike traditional single-label
          tasks, my approach tackles the complexity of multi-class
          classification, predicting multiple attributes of each piece to
          provide a rich, nuanced understanding of artistic creations.
        </p>
        <p>
          The live demo above showcases my custom React interface, which
          interacts with my trained model for inference via an API hosted on
          Hugging Face. To explore my Hugging Face space and check out other
          spaces I&apos;ve created,{" "}
          <a
            target="_blank"
            rel="nofollow"
            href="https://aishae-art-geek.hf.space"
          >
            click here
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "My Assistant",
    projectType: "my_assistant",
    imgSrc: "/project-imgs/how_can_I_help_you.jpeg",
    code: "https://github.com/AishaEvering/My_Assistant",
    projectLink: "https://aishae-my-assistant.hf.space/",
    liveDemo: true,
    tech: ["TensorFlow", "Keras", "Python", "Pandas", "Numpy", "Matplotlib"],
    description:
      "A fine-tuned DistilBERT transformer model that predicts the intent behind user commands.",
    modalContent: (
      <>
        <p>
          In our fast-paced world, having a personal assistant can make life
          significantly easier. While some are fortunate enough to have one,
          most of us rely on virtual assistants like Alexa, Siri, Google
          Assistant, and now, My Assistant.
        </p>
        <p>
          My Assistant is a fine-tuned DistilBERT model optimized for multiclass
          text classification. Trained on the{" "}
          <a
            target="_blank"
            rel="nofollow"
            href="https://huggingface.co/datasets/Bhuvaneshwari/intent_classification"
          >
            Bhuvaneshwari/intent_classification dataset
          </a>
          from Hugging Face, it accurately predicts customer intents across a
          range of categories, including:
        </p>
        <p>
          [
          <i>
            Add To Playlist, Affirmation, Book Meeting, Book Restaurant,
            Cancellation, Excitment, Get Weather, Greetings, Play Music, Rate
            Book, Search Creative Work, Search Screening Event
          </i>
          ]
        </p>
        <p>
          <i>Okay Okay Okay</i> it doesn&apos;t actually complete the task. But
          it means well and in this demo it acknowleges that you asked by
          showing you what it would do maybe some time in the future. You never
          know.
        </p>
        <p>
          The live demo above showcases my custom React interface, which
          interacts with my trained model for inference via an API hosted on
          Hugging Face. To explore my Hugging Face space and check out other
          spaces I’ve created,
          <a
            target="_blank"
            rel="nofollow"
            href="https://aishae-my-assistant.hf.space/"
          >
            click here
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "Emotion Detection",
    projectType: "default",
    imgSrc: "/project-imgs/EmotionDetection.png",
    code: "https://github.com/AishaEvering/Emotion_Detection",
    projectLink: "",
    liveDemo: false,
    tech: ["TensorFlow", "Python", "Pandas", "Numpy", "Matplotlib"],
    description:
      "A multi-class classification model designed to identify emotions—sad, happy, surprised, and neutral—across various facial expressions.",
    modalContent: (
      <>
        <p>
          This project serves as a capstone endeavor towards earning my MIT
          Applied Data Science certification. In this project, I selected a
          dataset, trained custom models, and employed transfer learning to
          classify images. The final stage involved presenting the resulting
          metrics for each experiment in a live presentation.
        </p>
      </>
    ),
  },
  {
    title: "Recipe Discovery",
    projectType: "default",
    imgSrc: "/project-imgs/recipe_loader.jpeg",
    code: "https://github.com/AishaEvering/RecipeDiscovery",
    projectLink: "",
    liveDemo: false,
    tech: ["Scikit-Learn", "Python", "Pandas", "Numpy", "Matplotlib"],
    description:
      "Solving a binary classification problem to predict which recipes will lead to high web traffic using logistic regression models.",
    modalContent: (
      <>
        <p>
          This is my final project for obtaining the Data Science Certification
          from{" "}
          <a
            target="_blank"
            rel="nofollow"
            href="https://www.datacamp.com/portfolio/shovon3000g"
          >
            DataCamp
          </a>
          . In this project, I was provided with a dataset containing recipes,
          their details, and whether they generated high web traffic. My task
          was to predict which types of recipes would drive high traffic in the
          future, aiming for at least 80% accuracy
        </p>
        <p>
          The project involved training two models: a baseline model and a
          comparison model. I demonstrated techniques for data validation and
          cleaning, and shared insights from exploratory data analysis (EDA).
          After developing and training the models, I presented my findings. You
          can view that presentaion in my GitHub repository.
        </p>
      </>
    ),
  },
];
