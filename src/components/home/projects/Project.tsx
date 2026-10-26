"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiFillGithub, AiFillFilePdf } from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
import { ArtGeekProjectModal } from "./ArtGeekProjectModal";
import { MyAssistantProjectModal } from "./MyAssistantProjectModal";
import { HairDetectProjectModal } from "./HairDetectProjectModal";
import styles from "./projects.module.scss";

export interface ProjectResource {
  label: string;
  href: string;
  type: "poster" | "paper" | "manuscript" | "demo" | "other";
}

export interface Props {
  modalContent: JSX.Element;
  description: string;
  projectLink: string;
  review: string;
  reviewer: string;
  imgSrc: string;
  modalImgSrc?: string;
  tech: string[];
  title: string;
  code: string;
  liveDemo: boolean;
  projectType: string;
  showGitHub: boolean;
  showReadMeSection: boolean;
  showSourceCode: boolean;
  isPaper: boolean;
  isPoster: boolean;
  number: string;
  category: string;
  displayTitle: string;
  shortDescription: string;
  showPreviewImage?: boolean;
  resources?: ProjectResource[];
  onTryBuzz?: () => void;
}

export const Project = ({
  modalContent,
  projectLink,
  review,
  reviewer,
  description,
  imgSrc,
  modalImgSrc,
  title,
  code,
  tech,
  liveDemo,
  projectType = "default",
  showGitHub = true,
  showReadMeSection = true,
  showSourceCode = true,
  isPaper = false,
  isPoster = false,
  number,
  category,
  displayTitle,
  shortDescription,
  resources,
  showPreviewImage = true,
  onTryBuzz,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.article
        className={styles.projectCard}
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.cardTopline}>
          <span>
            {category} / {number}
          </span>
          <button
            type="button"
            className={styles.cardArrow}
            onClick={() => setIsOpen(true)}
            aria-label={`Learn more about ${displayTitle}`}
          >
            ↗
          </button>
        </div>
        <button
          className={styles.projectImage}
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={`View ${displayTitle} project details`}
        >
          {imgSrc ? (
            <Image
              src={imgSrc}
              alt={`${displayTitle} project preview`}
              width={640}
              height={360}
            />
          ) : (
            <span className={styles.imagePlaceholder}>
              Research poster · preview coming soon
            </span>
          )}
        </button>
        <div className={styles.projectCopy}>
          <h3>{displayTitle}</h3>
          <p className={styles.projectDescription}>{shortDescription}</p>
          <div className={styles.tags}>
            {tech.slice(0, 3).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className={styles.cardLinks}>
            <button type="button" onClick={() => setIsOpen(true)}>
              Explore project ↗
            </button>
            {code && (
              <Link
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  showGitHub
                    ? `${displayTitle} source code`
                    : `${displayTitle} PDF`
                }
              >
                {showGitHub ? <AiFillGithub /> : <AiFillFilePdf />}
              </Link>
            )}
          </div>
        </div>
      </motion.article>
      {projectType == "default" && (
        <ProjectModal
          modalContent={modalContent}
          projectLink={projectLink}
          review={review}
          reviewer={reviewer}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          imgSrc={imgSrc}
          modalImgSrc={modalImgSrc}
          title={title}
          code={code}
          tech={tech}
          showReadMeSection={showReadMeSection}
          showSourceCode={showSourceCode}
          category={category}
          isPaper={isPaper}
          isPoster={isPoster}
          resources={resources}
          showPreviewImage={showPreviewImage}
          onTryBuzz={onTryBuzz}
        />
      )}
      {projectType == "art_geek" && (
        <ArtGeekProjectModal
          modalContent={modalContent}
          projectLink={projectLink}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          title={title}
          code={code}
          tech={tech}
        />
      )}
      {projectType == "my_assistant" && (
        <MyAssistantProjectModal
          modalContent={modalContent}
          projectLink={projectLink}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          title={title}
          code={code}
          tech={tech}
        />
      )}
      {projectType == "hair_detect" && (
        <HairDetectProjectModal
          modalContent={modalContent}
          projectLink={projectLink}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          title={title}
          code={code}
          tech={tech}
        />
      )}
    </>
  );
};
