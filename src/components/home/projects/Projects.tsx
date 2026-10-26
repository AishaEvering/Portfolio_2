"use client";

import { Project, type Props as ProjectProps } from "./Project";
import { useState } from "react";
import { ProjectModal } from "./ProjectModal";
import { HairDetectionGallery } from "./HairDetectionGallery";
import { ArtGeekModelComparison } from "./ArtGeekModelComparison";

import styles from "./projects.module.scss";

interface ProjectsProps {
  onTryBuzz: () => void;
}

export const Projects = ({ onTryBuzz }: ProjectsProps) => {
  const [isBioToolsOpen, setIsBioToolsOpen] = useState(false);

  return (
    <section
      className="section-wrapper"
      id="work"
      aria-labelledby="selected-work-title"
    >
      <div className={styles.collection}>
        <div className={styles.collectionHeader}>
          <div>
            <p className={styles.eyebrow}>
              A collection of curiosity, research & code
            </p>
            <h2 id="selected-work-title">Selected Work</h2>
            <p className={styles.collectionIntro}>
              Scientific software, computational research, and machine learning
              experiments.
            </p>
          </div>
          <span className={styles.collectionCount}>01 — 09</span>
        </div>

        <article className={styles.featuredCard}>
          <div className={styles.featuredTopline}>
            <span>FEATURED · SCIENTIFIC SOFTWARE / 01</span>
            <button
              type="button"
              className={styles.cardArrow}
              onClick={() => setIsBioToolsOpen(true)}
              aria-label="Read about BioTools"
            >
              ↗
            </button>
          </div>
          <div className={styles.featuredBody}>
            <div className={styles.featuredCopy}>
              <div className={styles.featuredIdentity}>
                <img
                  src="/biotools-logo.svg"
                  alt=""
                  className={styles.featuredLogo}
                />
                <h3>BioTools</h3>
              </div>
              <p>
                Interactive software that makes bioinformatics command-line
                workflows easier to understand and use.
              </p>
              <div className={styles.tags}>
                <span>React</span>
                <span>TypeScript</span>
                <span>Bioinformatics</span>
              </div>
              <div className={styles.featuredLinks}>
                <a
                  href="https://bio-tools.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore BioTools ↗
                </a>
                <a
                  href="https://github.com/AishaEvering/BioTools"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code ↗
                </a>
              </div>
            </div>
            <div className={styles.featuredPreview}>
              <img
                src="/biotools-demo.gif"
                alt="Demonstration of the BioTools SAM view command builder"
                loading="lazy"
              />
            </div>
          </div>
        </article>

        <ProjectModal
          isOpen={isBioToolsOpen}
          setIsOpen={setIsBioToolsOpen}
          title="BioTools"
          category="SCIENTIFIC SOFTWARE DEVELOPMENT"
          imgSrc="/biotools-demo.gif"
          code="https://github.com/AishaEvering/BioTools"
          projectLink="https://bio-tools.dev"
          tech={["React", "TypeScript", "Vite", "SAMtools", "Bioinformatics"]}
          showReadMeSection={true}
          showSourceCode={true}
          modalContent={
            <>
              <h3>The problem</h3>
              <p>
                Bioinformatics command-line tools are powerful, but discovering
                options, understanding flags, and combining them correctly can
                be challenging. I wanted to explore how interface design could
                make these workflows easier to understand.
              </p>

              <h3>What I built</h3>
              <p>
                BioTools is a visual command builder for{" "}
                <code>samtools view</code>. Users can configure filtering
                options, select common presets, and generate commands they can
                inspect and copy into their workflows.
              </p>

              <h3>Designed for understanding</h3>
              <ul>
                <li>
                  Interactive controls for SAM flags and filtering options.
                </li>
                <li>
                  Presets for common operations, including properly paired
                  reads, mapped reads, and duplicate filtering.
                </li>
                <li>
                  Readable command output that makes selected options visible
                  rather than hiding the underlying syntax.
                </li>
              </ul>

              <h3>Why it matters</h3>
              <p>
                My goal wasn't to replace the command line. It was to make
                scientific software easier to explore, learn, and use
                confidently. BioTools combines my software engineering
                experience with my interest in creating intuitive computational
                research tools.
              </p>
            </>
          }
        />

        <div className={styles.projects}>
          {projects.map((project, index) => (
            <Project
              key={project.title}
              {...project}
              projectLink={project.projectLink ?? ""}
              onTryBuzz={project.title === "About Buzz" ? onTryBuzz : undefined}
              number={String(index + 2).padStart(2, "0")}
              category={categories[project.title] ?? "PROJECT"}
              displayTitle={displayTitles[project.title] ?? project.title}
              shortDescription={
                shortDescriptions[project.title] ?? project.description
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const categories: Record<string, string> = {
  "Dmc1 Phylogeny": "COMPUTATIONAL RESEARCH",
  "Anaeramoeba flamelloides": "BIOLOGICAL RESEARCH",
  "Polygenic Risk Score Bias in Type 2 Diabetes": "GENOMICS RESEARCH",
  "Illusion of Originality": "INTERACTIVE STORYTELLING",
  "Black Hair Detection": "COMPUTER VISION",
  "About Buzz": "AI / SOFTWARE ENGINEERING",
  "Art Geek": "MACHINE LEARNING",
  "My Assistant": "NATURAL LANGUAGE PROCESSING",
};
const displayTitles: Record<string, string> = {
  "Anaeramoeba flamelloides": "Anaeramoeba flamelloides",
  "Polygenic Risk Score Bias in Type 2 Diabetes": "Polygenic Risk Score Bias",
  "About Buzz": "Buzz",
};
const shortDescriptions: Record<string, string> = {
  "Dmc1 Phylogeny":
    "Exploring the evolution of Dmc1 homologs across Metamonada.",
  "Anaeramoeba flamelloides":
    "Investigating unusual cellular organization, hydrogenosomes, and bacterial symbiosis.",
  "Polygenic Risk Score Bias in Type 2 Diabetes":
    "Examining ancestry-related disparities in genomic prediction for type 2 diabetes.",
  "Illusion of Originality":
    "An interactive exploration of authorship, ownership, and generative AI.",
  "Black Hair Detection":
    "A custom dataset and YOLO model for recognizing Black hairstyles.",
  "About Buzz":
    "A retrieval-augmented chatbot that answers questions about my work.",
  "Art Geek":
    "Comparing CNN and Vision Transformer approaches to classifying artwork.",
  "My Assistant":
    "Fine-tuning DistilBERT to classify the intent behind natural-language commands.",
};

type ProjectData = Omit<
  ProjectProps,
  | "number"
  | "onTryBuzz"
  | "displayTitle"
  | "shortDescription"
  | "projectLink"
  | "category"
> & {
  projectLink?: string;
  category?: string;
};

const projects: ProjectData[] = [
  {
    title: "Dmc1 Phylogeny",
    projectType: "default",
    imgSrc: "/project-imgs/dmc1_scientific_poster.png",
    code: "/Evolution of Dmc1 Homologs Across Metamonada Poster.pdf",
    projectLink: "/Evolution of Dmc1 Homologs Across Metamonada Poster.pdf",
    showGitHub: false,
    liveDemo: false,
    showReadMeSection: false,
    showSourceCode: false,
    isPaper: false,
    isPoster: true,
    category: "COMPUTATIONAL BIOLOGY · RESEARCH",
    resources: [
      {
        label: "View research poster",
        href: "/Evolution of Dmc1 Homologs Across Metamonada Poster.pdf",
        type: "poster",
      },
      {
        label: "Read full manuscript",
        href: "/Group 9 — Manuscript Final.pdf",
        type: "manuscript",
      },
    ],
    review: "",
    reviewer: "",
    tech: ["Phylogenetics", "IQ-TREE", "Metamonada"],
    description:
      "Investigating the evolutionary history of Dmc1 homologs across Metamonada.",
    modalContent: (
      <>
        <h3>Research question</h3>
        <p>
          How did Dmc1, a protein involved in meiotic homologous recombination,
          evolve across Metamonada? I investigated whether its phylogenetic
          distribution was consistent with proposed gene duplication events,
          particularly within Fornicata.
        </p>

        <h3>My contribution</h3>
        <ul>
          <li>
            Analyzed Dmc1 homologs using EukPhylo and maximum-likelihood
            phylogenetic inference.
          </li>
          <li>
            Identified and removed 91 redundant sequences, reducing the dataset
            from 1,222 to 1,131 sequences.
          </li>
          <li>
            Realigned sequences with MAFFT, trimmed alignments with trimAl, and
            reconstructed the phylogeny using IQ-TREE 2.
          </li>
          <li>
            Visualized and interpreted the resulting tree, highlighting major
            metamonad lineages and evaluating bootstrap support.
          </li>
        </ul>

        <h3>Key findings</h3>
        <ul>
          <li>
            Dmc1 homologs occurred in multiple regions of the phylogeny rather
            than forming a single Metamonada clade.
          </li>
          <li>
            Fornicata sequences appeared in three separate regions, consistent
            with a complex evolutionary history.
          </li>
          <li>
            Multiple Dmc1 homologs were also recovered in BaSk and
            Preaxostyla/Oxymonadida, suggesting that duplication may extend
            beyond Fornicata.
          </li>
        </ul>

        <h3>Interpretation</h3>
        <p>
          These patterns suggest a more complex history of Dmc1 duplication,
          retention, and loss than initially hypothesized. However, limited
          sampling and uncertainty in deeper phylogenetic relationships prevent
          definitive conclusions about the timing or number of duplication
          events.
        </p>

        <p>
          <strong>Collaborative research:</strong> This Dmc1 investigation
          contributed to a comparative study of Dmc1, Mnd1, and Hop2 conducted
          with Chloe Nguyen and Percy Raggi.
        </p>
      </>
    ),
  },
  {
    title: "Anaeramoeba flamelloides",
    projectType: "default",
    imgSrc: "/project-imgs/scientific_poster.png",
    code: "/Anaeramoeba_flamelloides_Poster.pdf",
    projectLink: "/Research_ Anaeramoebidae flamelloides.pdf",
    showGitHub: false,
    liveDemo: false,
    showReadMeSection: false,
    showSourceCode: false,
    isPaper: false,
    isPoster: true,
    category: "MICROBIAL EUKARYOTE RESEARCH",
    review: "",
    reviewer: "",
    resources: [
      {
        label: "View scientific poster",
        href: "/Anaeramoeba_flamelloides_Poster.pdf",
        type: "poster",
      },
      {
        label: "Read research report",
        href: "/Research_ Anaeramoebidae flamelloides.pdf",
        type: "paper" as const,
      },
    ],
    tech: [
      "Microbial Eukaryotes",
      "Phylogenetics",
      "Symbiosis",
      "Cell Biology",
      "Evolution",
    ],
    description:
      "Literature-based investigation of Anaeramoeba flamelloides, an anaerobic microbial eukaryote with unusual cellular organization and bacterial symbionts. Created as part of graduate research coursework exploring microbial eukaryote diversity, evolution, and phylogenetics.",
    modalContent: (
      <>
        <h3>Meet the organism</h3>
        <p>
          <em>Anaeramoeba flamelloides</em> is a free-living anaerobic
          amoeboflagellate found in marine sediments. Its unusual cellular
          organization includes hundreds of hydrogenosomes and a large
          compartment housing sulfate-reducing bacterial symbionts.
        </p>

        <h3>What I investigated</h3>
        <ul>
          <li>Its morphology and placement within Metamonada.</li>
          <li>
            The close association between its hydrogenosomes and bacterial
            symbionts.
          </li>
          <li>
            How this partnership may support energy metabolism in
            oxygen-depleted environments.
          </li>
        </ul>

        <h3>What makes it fascinating</h3>
        <p>
          Published microscopy revealed hundreds of hydrogenosomes positioned
          near an interconnected symbiosome containing sulfate-reducing
          bacteria. This arrangement raises intriguing questions about metabolic
          exchange between the host and its symbionts.
        </p>

        <h3>Research approach</h3>
        <p>
          I reviewed and synthesized published research on the organism's
          cellular structure, phylogenetic placement, and metabolic symbiosis. I
          then translated those findings into a scientific poster, using visual
          evidence to explain its unusual organization and biological
          significance.
        </p>
      </>
    ),
  },
  {
    title: "Polygenic Risk Score Bias in Type 2 Diabetes",
    projectType: "default",
    imgSrc: "/project-imgs/gwas.png",
    code: "/Ancestry Related Disparities in Polygenic Risk Score Performance for Type 2 Diabetes and Their Ethical Implications.pdf",
    projectLink:
      "/Ancestry Related Disparities in Polygenic Risk Score Performance for Type 2 Diabetes and Their Ethical Implications.pdf",
    showGitHub: false,
    liveDemo: false,
    showReadMeSection: false,
    showSourceCode: false,
    isPaper: true,
    isPoster: false,
    review: "",
    reviewer: "",
    tech: [
      "GWAS",
      "PRS",
      "Genomics",
      "Machine Learning",
      "Computational Biology",
    ],
    category: "GENOMICS RESEARCH",
    resources: [
      {
        label: "Read research paper",
        href: "/Ancestry Related Disparities in Polygenic Risk Score Performance for Type 2 Diabetes and Their Ethical Implications.pdf",
        type: "paper" as const,
      },
    ],
    description:
      "Graduate research project exploring how ancestry, population structure, and genomic variation influence the performance and fairness of polygenic risk scores for Type 2 Diabetes prediction across diverse populations.",
    modalContent: (
      <>
        <h3>The research question</h3>
        <p>
          Can polygenic risk scores predict Type 2 diabetes reliably across
          populations when the genomic datasets used to develop them are
          predominantly European?
        </p>

        <h3>What I investigated</h3>
        <ul>
          <li>
            How ancestry representation, allele frequencies, and linkage
            disequilibrium affect PRS transferability.
          </li>
          <li>
            How methods including LDpred2, PRS-CSx, MUSSEL, and FairPRS attempt
            to improve prediction across diverse populations.
          </li>
          <li>
            The ethical and clinical implications of applying genetic risk
            models to underrepresented populations.
          </li>
        </ul>

        <h3>What the evidence revealed</h3>
        <p>
          Predictive disparities arise from both differences in population
          genetic architecture and unequal representation in genomic research.
          More advanced statistical and machine learning methods can improve
          performance, but cannot fully compensate for missing or
          unrepresentative training data.
        </p>

        <h3>Why it matters</h3>
        <p>
          Equitable precision medicine requires more than better algorithms. It
          also depends on diverse genomic datasets, population-aware validation,
          and careful evaluation of clinical utility.
        </p>
      </>
    ),
  },
  {
    title: "Illusion of Originality",
    projectType: "default",
    imgSrc: "/project-imgs/illusion_of_originality.gif",
    code: "https://github.com/AishaEvering/illusion-of-originality",
    projectLink: "https://illusion-of-originality.aishaeportfolio.com/",
    showGitHub: true,
    review:
      "This is truly exceptional work!!! By far the best project I've seen teaching this class. Please let me know if there's anything I can do to help support your work and interests going forward!",
    reviewer: "Beckett Sterner",
    liveDemo: true,
    showReadMeSection: true,
    showSourceCode: true,
    isPaper: false,
    isPoster: false,
    category: "AI ETHICS & INTERACTIVE DESIGN",
    tech: ["React", "TailwindCSS", "Framer Motion", "GSAP", "Next.js"],
    description:
      "An interactive case study examining generative AI, scraped training data, and the hidden human labor behind machine-generated content.",
    modalContent: (
      <>
        <h3>The illusion</h3>
        <p>
          Generative AI can produce images, text, and other content that appear
          original. But behind those outputs are enormous datasets containing
          human-created work, often collected without the creators' knowledge or
          consent.
        </p>

        <h3>Four perspectives, one ecosystem</h3>
        <p>
          The experience examines the competing interests and responsibilities
          of four groups:
        </p>
        <ul>
          <li>
            <strong>AI corporations:</strong> The collection and use of
            large-scale datasets to train generative models.
          </li>
          <li>
            <strong>Governance and regulators:</strong> The challenge of
            developing legal and ethical oversight.
          </li>
          <li>
            <strong>Artists and creators:</strong> Questions of authorship,
            consent, compensation, and ownership.
          </li>
          <li>
            <strong>Whistleblowers and consumers:</strong> The role of
            transparency, accountability, and public awareness.
          </li>
        </ul>

        <h3>Making ethics interactive</h3>
        <p>
          I designed and developed an educational website that uses animated
          storytelling, stakeholder reaction strips, and interactive sections to
          make the relationships between these groups visible and
          understandable.
        </p>

        <h3>The central question</h3>
        <p>
          When AI-generated content depends on human-created material, who
          deserves recognition, control, and compensation?
        </p>
      </>
    ),
  },
  {
    title: "Black Hair Detection",
    projectType: "default",
    imgSrc: "/project-imgs/hair_detect.jpg",
    code: "https://github.com/AishaEvering/ObjectDetection",
    // projectLink:
    //   "https://universe.roboflow.com/aishas-workspace/black-hair-detection",
    review: "",
    reviewer: "",
    showGitHub: true,
    liveDemo: false,
    showReadMeSection: true,
    showSourceCode: true,
    isPaper: false,
    isPoster: false,
    showPreviewImage: false,
    tech: ["Roboflow", "YOLOv8", "Flask", "PyTorch", "Python", "React"],
    description:
      "A custom-annotated dataset, YOLOv8 object detection model, and interactive application for recognizing Black hairstyles.",
    modalContent: (
      <>
        <h3>The idea</h3>
        <p>
          I wanted to explore object detection through a subject that interested
          me: hairstyles commonly seen in Black communities. Rather than relying
          on an existing classification dataset, I created my own collection of
          annotated images to train a model to recognize different hairstyles.
        </p>

        <h3>Building the dataset</h3>
        <p>
          I collected and annotated images using Roboflow, defining bounding
          boxes and assigning hairstyle labels. The dataset includes afros,
          bantu knots, braids, cornrows, fades, locs, sisterlocs, and TWAs
          (teeny weeny afros), among other styles.
        </p>
        <p>
          Preparing the dataset required decisions about how hairstyles should
          be categorized and represented in the training data.
        </p>

        <h3>Training the model</h3>
        <p>
          I trained a YOLOv8 object detection model using the custom dataset.
          Unlike image classification, object detection predicts both the
          location and category of objects in an image.
        </p>
        <p>
          The model produces bounding-box predictions and hairstyle labels for
          the styles represented in its training data.
        </p>

        <h3>Bringing the model to life</h3>
        <p>
          I built a React interface connected to a containerized Flask API
          hosted on Google Cloud. The application supported image uploads, video
          uploads, and live camera input, allowing users to interact with the
          trained model.
        </p>

        <h3>Application demonstrations</h3>
        <p>
          These recordings showcase the original application and its three input
          modes.
        </p>

        <HairDetectionGallery />

        <h3>Explore the dataset</h3>
        <p>
          The annotated dataset and available model information can be explored
          on{" "}
          <a
            href="https://universe.roboflow.com/aishas-workspace/black-hair-detection"
            target="_blank"
            rel="noopener noreferrer"
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
    modalImgSrc: "/project-imgs/buzz.gif",
    showPreviewImage: false,
    code: "https://github.com/AishaEvering/Portfolio_2",
    projectLink: "",
    review: "",
    reviewer: "",
    liveDemo: false,
    showSourceCode: true,
    isPaper: false,
    isPoster: false,
    showReadMeSection: true,
    showGitHub: true,
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Redis",
      "OpenAI",
      "LangChain",
      "DataStax",
    ],
    description:
      "A retrieval-augmented chatbot that uses language models and portfolio-specific information to answer questions about my work.",
    modalContent: (
      <>
        <h3>Meet Buzz</h3>
        <p>
          Buzz is a conversational assistant I developed to help visitors
          explore my portfolio. Instead of navigating through individual project
          pages, users can ask questions about my work and receive responses
          informed by relevant portfolio information.
        </p>

        <h3>Beyond a general-purpose chatbot</h3>
        <p>
          A language model can generate natural-sounding answers, but it doesn't
          automatically know the details of my projects. I built Buzz using
          Retrieval-Augmented Generation (RAG), an approach that combines
          information retrieval with language model generation.
        </p>
        <p>
          By retrieving relevant information about my work before generating a
          response, Buzz can answer portfolio-specific questions using context
          beyond the model's general knowledge.
        </p>

        <h3>Building the system</h3>
        <p>
          I integrated OpenAI's language models with LangChain and DataStax to
          support the retrieval and response generation workflow. The chatbot
          operates within my Next.js and React portfolio, bringing together
          frontend development and AI-backed application logic.
        </p>

        <h3>Designing the experience</h3>
        <p>
          I wanted Buzz to feel like a natural part of the portfolio rather than
          a separate AI demonstration. I developed a custom React interface that
          lets visitors interact with the assistant while exploring my projects
          and technical background.
        </p>

        <h3>Why it matters</h3>
        <p>
          Buzz demonstrates how language models can be incorporated into
          applications to make existing information more accessible. For me, the
          interesting engineering challenge was connecting retrieval, response
          generation, and interface design into a cohesive experience.
        </p>
      </>
    ),
  },

  {
    title: "Art Geek",
    projectType: "default",
    imgSrc: "/project-imgs/Mona.png",
    modalImgSrc: "/project-imgs/ArtGeek.gif",
    showPreviewImage: false,
    code: "https://github.com/AishaEvering/Art_Geek",
    projectLink: "https://huggingface.co/spaces/AishaE/art_geek",
    review: "",
    reviewer: "",
    liveDemo: true,
    showGitHub: true,
    showReadMeSection: true,
    showSourceCode: true,
    isPaper: false,
    isPoster: false,
    tech: [
      "PyTorch",
      "Python",
      "Vision Transformer",
      "EfficientNet",
      "Scikit-learn",
    ],
    description:
      "A deep learning application comparing EfficientNet and Vision Transformers for predicting artwork genre and style.",
    modalContent: (
      <>
        <h3>The idea</h3>
        <p>
          I wanted to explore how deep learning models could recognize artistic
          characteristics in paintings. Using the WikiArt dataset, I developed a
          system to predict an artwork's genre and style.
        </p>

        <h3>Rethinking the classification problem</h3>
        <p>
          I initially approached the project as multilabel classification.
          However, each artwork had one label per category, making separate
          multiclass predictions a better fit.
        </p>
        <p>
          I revised the encoding strategy and training approach, replacing
          binary cross-entropy with cross-entropy loss and using softmax rather
          than sigmoid for class predictions.
        </p>

        <h3>Working with imbalanced data</h3>
        <p>
          The dataset contained significant class imbalance. Artist attribution
          was particularly problematic: more than half the artworks had unknown
          artists, and many identified artists had very few examples. I removed
          artist prediction and focused on genre and style.
        </p>
        <p>
          To address imbalance in the remaining categories, I used
          class-weighted loss functions to give underrepresented classes greater
          influence during training.
        </p>

        <h3>EfficientNet vs. Vision Transformer</h3>
        <p>
          I compared two transfer-learning approaches: EfficientNet, a
          convolutional neural network, and Vision Transformer (ViT), a
          transformer-based architecture.
        </p>
        <p>
          I also experimented with image augmentation, but those experiments did
          not outperform the base models.
        </p>

        <ArtGeekModelComparison />

        <h3>From model to application</h3>
        <p>
          I selected ViT as the final model and built a custom React interface
          that allows visitors to upload artwork or select example paintings.
          The application sends images to the model hosted on Hugging Face and
          displays genre and style predictions.
        </p>

        <h3>What I learned</h3>
        <p>
          This project reinforced that model development is as much about
          understanding the data and choosing appropriate methods as it is about
          selecting an architecture.
        </p>
        <p>
          I revisited assumptions, adjusted the training approach, evaluated
          competing models, and turned the final result into an application
          people could use.
        </p>
      </>
    ),
  },

  {
    title: "My Assistant",
    projectType: "default",
    imgSrc: "/project-imgs/how_can_I_help_you.jpeg",
    modalImgSrc: "/project-imgs/MyAssistant.gif",
    showPreviewImage: false,

    code: "https://github.com/AishaEvering/My_Assistant",
    projectLink: "https://huggingface.co/spaces/AishaE/My_Assistant",

    review: "",
    reviewer: "",

    liveDemo: true,
    showGitHub: true,
    showSourceCode: true,
    showReadMeSection: true,

    isPaper: false,
    isPoster: false,

    tech: ["TensorFlow", "Keras", "Python", "DistilBERT", "Hugging Face"],

    description:
      "A natural language processing application that uses a fine-tuned DistilBERT model to classify the intent behind user requests.",

    modalContent: (
      <>
        <h3>The idea</h3>
        <p>
          Virtual assistants are designed to understand what people want to
          accomplish. I wanted to explore one of the fundamental components
          behind that experience: intent recognition.
        </p>
        <p>
          My Assistant uses a fine-tuned DistilBERT model to classify
          natural-language requests into categories such as playing music,
          booking meetings, checking the weather, and making restaurant
          reservations.
        </p>

        <h3>Understanding DistilBERT</h3>
        <p>
          I chose DistilBERT, a smaller and more computationally efficient
          version of BERT, to explore transformer-based natural language
          processing.
        </p>
        <p>
          Unlike generative language models, DistilBERT uses an encoder
          architecture to build contextual representations of text. I fine-tuned
          it for multiclass intent classification using a dataset from Hugging
          Face.
        </p>

        <h3>Fine-tuning the model</h3>
        <p>
          I used TensorFlow, Keras, and Hugging Face Transformers to prepare the
          dataset, tokenize text, and train the model.
        </p>
        <p>
          One of the biggest challenges was navigating compatibility issues
          between library versions and training APIs. Working through those
          problems reinforced the importance of understanding the underlying
          training process rather than relying entirely on framework
          abstractions.
        </p>

        <h3>Evaluating the results</h3>
        <p>
          The initial evaluation produced very high classification scores. On
          later review, I identified an important limitation: minority classes
          had been upsampled before the dataset was divided into training,
          validation, and test sets.
        </p>
        <p>
          Because upsampling involved duplicating examples, this introduced a
          risk of overlapping samples between the splits. A more reliable
          evaluation would split the original data first and apply balancing
          only to the training set.
        </p>

        <h3>Building the application</h3>
        <p>
          I developed a custom React interface connected to the trained model
          through an inference API hosted on Hugging Face. Visitors can enter
          natural-language requests and explore how the model classifies their
          intent.
        </p>
        <p>
          My Assistant can recognize a request to book a restaurant. Actually
          making the reservation? That's a feature for another day.
        </p>

        <h3>What I learned</h3>
        <p>
          This project introduced me to transformer architectures, fine-tuning
          pretrained language models, and deploying NLP capabilities through an
          interactive application.
        </p>
        <p>
          Revisiting the project also reinforced an important lesson: strong
          evaluation metrics are only meaningful when the methodology behind
          them is sound.
        </p>
      </>
    ),
  },

  // {
  //   title: "Emotion Detection",
  //   projectType: "default",
  //   imgSrc: "/project-imgs/EmotionDetection.png",
  //   code: "https://github.com/AishaEvering/Emotion_Detection",
  //   projectLink: "",
  //   review: "",
  //   reviewer: "",
  //   liveDemo: false,
  //   showGitHub: true,
  //   showSourceCode: true,
  //   isPaper: false,
  //   tech: ["TensorFlow", "Python", "Pandas", "Numpy", "Matplotlib"],
  //   description:
  //     "A multi-class classification model designed to identify emotions—sad, happy, surprised, and neutral—across various facial expressions.",
  //   modalContent: (
  //     <>
  //       <p>
  //         This project serves as a capstone endeavor towards earning my MIT
  //         Applied Data Science certification. In this project, I selected a
  //         dataset, trained custom models, and employed transfer learning to
  //         classify images. The final stage involved presenting the resulting
  //         metrics for each experiment in a live presentation.
  //       </p>
  //     </>
  //   ),
  // },
  // {
  //   title: "Recipe Discovery",
  //   projectType: "default",
  //   imgSrc: "/project-imgs/recipe_loader.jpeg",
  //   code: "https://github.com/AishaEvering/RecipeDiscovery",
  //   projectLink: "",
  //   review: "",
  //   reviewer: "",
  //   liveDemo: false,
  //   tech: ["Scikit-Learn", "Python", "Pandas", "Numpy", "Matplotlib"],
  //   description:
  //     "Solving a binary classification problem to predict which recipes will lead to high web traffic using logistic regression models.",
  //   modalContent: (
  //     <>
  //       <p>
  //         This is my final project for obtaining the Data Science Certification
  //         from{" "}
  //         <a
  //           target="_blank"
  //           rel="nofollow"
  //           href="https://www.datacamp.com/portfolio/shovon3000g"
  //         >
  //           DataCamp
  //         </a>
  //         . In this project, I was provided with a dataset containing recipes,
  //         their details, and whether they generated high web traffic. My task
  //         was to predict which types of recipes would drive high traffic in the
  //         future, aiming for at least 80% accuracy
  //       </p>
  //       <p>
  //         The project involved training two models: a baseline model and a
  //         comparison model. I demonstrated techniques for data validation and
  //         cleaning, and shared insights from exploratory data analysis (EDA).
  //         After developing and training the models, I presented my findings. You
  //         can view that presentaion in my GitHub repository.
  //       </p>
  //     </>
  //   ),
  // },
];
