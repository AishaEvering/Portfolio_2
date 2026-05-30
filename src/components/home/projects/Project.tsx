"use client";
import { Reveal } from "@/components/utils/Reveal";
import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillFilePdf, AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
import { ArtGeekProjectModal } from "./ArtGeekProjectModal";
import styles from "./projects.module.scss";
import { MyAssistantProjectModal } from "./MyAssistantProjectModal";
import { HairDetectProjectModal } from "./HairDetectProjectModal";
import Image from "next/image";

interface Props {
  modalContent: JSX.Element;
  description: string;
  projectLink: string;
  review: string;
  reviewer: string;
  imgSrc: string;
  tech: string[];
  title: string;
  code: string;
  liveDemo: boolean;
  projectType: string;
  showGitHub: boolean;
  showReadMeSection: boolean;
  showSourceCode: boolean;
  isPaper: boolean;
}

export const Project = ({
  modalContent,
  projectLink,
  review,
  reviewer,
  description,
  imgSrc,
  title,
  code,
  tech,
  liveDemo,
  projectType = "default",
  showGitHub = true,
  showReadMeSection = true,
  showSourceCode = true,
  isPaper = false,
}: Props) => {
  const [hovered, setHovered] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className={styles.projectImage}
        >
          <Image
            src={imgSrc}
            height={500}
            width={500}
            alt={`An image of the ${title} project.`}
            style={{
              width: hovered ? "90%" : "85%",
              rotate: hovered ? "2deg" : "0deg",
            }}
          />
        </div>
        <div className={styles.projectCopy}>
          <Reveal width="100%">
            <div className={styles.projectTitle}>
              <h4>{title}</h4>
              <div className={styles.projectTitleLine} />

              <Link href={code} target="_blank" rel="nofollow">
                {showGitHub ? (
                  <AiFillGithub size="2.8rem" />
                ) : (
                  <AiFillFilePdf size="2.8rem" />
                )}
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.projectTech}>{tech.join(" - ")}</div>
          </Reveal>
          <Reveal>
            <p className={styles.projectDescription}>
              {description}{" "}
              <span onClick={() => setIsOpen(true)}>
                {liveDemo ? "Learn more with live demo >" : "Learn more>"}
              </span>
            </p>
          </Reveal>
        </div>
      </motion.div>
      {projectType == "default" && (
        <ProjectModal
          modalContent={modalContent}
          projectLink={projectLink}
          review={review}
          reviewer={reviewer}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          imgSrc={imgSrc}
          title={title}
          code={code}
          tech={tech}
          showReadMeSection={showReadMeSection}
          showSourceCode={showSourceCode}
          isPaper={isPaper}
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
