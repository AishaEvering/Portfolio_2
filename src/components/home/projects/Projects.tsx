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
