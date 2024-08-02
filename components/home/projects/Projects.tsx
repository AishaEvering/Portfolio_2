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
    imgSrc: "project-imgs/Mona.png",
    code: "https://github.com/AishaEvering/Art_Geek",
    projectLink: "https://aishae-art-geek.hf.space",
    tech: ["Python", "PyTorch", "Pandas", "Numpy", "Matplotlib"],
    description:
      "A refined Vision Transformer (ViT) feature extractor model for computer vision that accurately predicts the genre and style of art pieces.",
    modalContent: (
      <>
        <p>
          I'm diving into the world of art classification with cutting-edge
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
          spaces I’ve created, simply click the link below.
        </p>
        <p>
          For a detailed account of the decisions I made, the challenges I
          encountered, and the insights I gained, please refer to the full
          README available through the source code link.
        </p>
      </>
    ),
  },
  {
    title: "Paint Reference 4",
    projectType: "default",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://github.com/AishaEvering/RecipeDiscovery/tree/main",
    tech: ["Node", "Express", "Postgres", "Kafka", "Redis"],
    description:
      "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
    modalContent: (
      <>
        <p>
          This project serves as an capstone endeavor undertaken to advance
          towards achieving my MIT Applied Data Science certification. In this
          project I had to select a dataset and train custom models and use
          tranfer learning to classify images. The final portion of the final
          consisted of me giving a live presenation on the resulting metrics for
          each experiment.
        </p>
        <p>
          For a comprehensive overview of the decisions I made, the challenges I
          faced, and the lessons I learned, please refer to the full README
          available at the ."
        </p>
      </>
    ),
  },
  {
    title: "Emotion Detection",
    projectType: "default",
    imgSrc: "project-imgs/EmotionDetection.png",
    code: "https://github.com/AishaEvering/Emotion_Detection",
    projectLink: "",
    tech: ["Python", "TensorFlow", "Pandas", "Numpy", "Matplotlib"],
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
        <p>
          For a detailed account of the decisions I made, the challenges I
          encountered, and the insights I gained, please refer to the full
          README available through the source code link.
        </p>
      </>
    ),
  },
  {
    title: "Recipe Discovery",
    projectType: "default",
    imgSrc: "project-imgs/pancakes.jpg",
    code: "https://www.github.com",
    projectLink: "https://github.com/AishaEvering/RecipeDiscovery/tree/main",
    tech: ["Python", "FastAPI", "SQLAlchemy"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {":)"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
];
