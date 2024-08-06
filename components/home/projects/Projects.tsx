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
    liveDemo: true,
    tech: ["PyTorch", "Python", "Pandas", "Numpy", "Matplotlib"],
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
      </>
    ),
  },
  {
    title: "My Assistant",
    projectType: "my_assistant",
    imgSrc: "project-imgs/my_assistant_header.png",
    code: "https://github.com/AishaEvering/My_Assistant",
    projectLink: "https://huggingface.co/spaces/AishaE/My_Assistant",
    liveDemo: true,
    tech: ["TensorFlow", "Python", "Pandas", "Numpy", "Matplotlib"],
    description:
      "A fine-tuned BERT transformer model that predicts the intent behind the user's commands.",
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
          <i>Okay Okay Okay</i> it doesn't actually complete the task. But it
          means well and in this demo it acknowleges that you asked by showing
          you what it would do maybe some time in the future. You never know.
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
    liveDemo: false,
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
