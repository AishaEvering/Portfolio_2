"use client";

import styles from "./projectmodal.module.scss";
import {
  useEffect,
  useId,
  useRef,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { PiBookOpenText } from "react-icons/pi";
import Image from "next/image";

interface ProjectResource {
  label: string;
  href: string;
  type: "poster" | "paper" | "manuscript" | "demo" | "other";
}

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  imgSrc: string;
  modalImgSrc?: string;
  code: string;
  projectLink?: string;
  review?: string;
  reviewer?: string;
  tech: string[];
  modalContent: ReactNode;
  showReadMeSection?: boolean;
  showSourceCode?: boolean;
  isPaper?: boolean;
  isPoster?: boolean;
  category?: string;
  summary?: string;
  resources?: ProjectResource[];
  showPreviewImage?: boolean;
  onTryBuzz?: () => void;
}

export const ProjectModal = ({
  modalContent,
  projectLink = "",
  review = "",
  reviewer = "",
  setIsOpen,
  imgSrc,
  modalImgSrc,
  isOpen,
  title,
  code,
  tech,
  showReadMeSection = true,
  showSourceCode = true,
  isPaper = false,
  isPoster = false,
  category = "SELECTED WORK",
  summary,
  resources = [],
  showPreviewImage = true,
  onTryBuzz,
}: Props) => {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);

      if (event.key === "Tab") {
        const dialog = closeRef.current?.closest('[role="dialog"]');
        const focusable = dialog?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );

        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus();
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen || typeof document === "undefined") return null;

  const portalTarget = document.getElementById("root") ?? document.body;

  return createPortal(
    <div
      className={styles.modal}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <motion.section
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={styles.modalCard}
        initial={prefersReducedMotion ? false : { y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
      >
        <div className={styles.modalContent}>
          <div className={styles.modalTopline}>
            <span className={styles.eyebrow}>{category}</span>
            <button
              ref={closeRef}
              type="button"
              className={styles.closeModalBtn}
              onClick={() => setIsOpen(false)}
              aria-label="Close project details"
            >
              <MdClose aria-hidden="true" />
            </button>
          </div>

          <h2 id={titleId} className={styles.modalTitle}>
            {title}
          </h2>

          {summary && <p className={styles.modalSummary}>{summary}</p>}

          <div
            className={styles.modalTech}
            aria-label="Technologies and topics"
          >
            {tech.map((item) => (
              <span className={styles.techTag} key={item}>
                {item}
              </span>
            ))}
          </div>

          <div className={styles.suppliedContent}>{modalContent}</div>

          {showPreviewImage && imgSrc && (
            <figure className={styles.figure}>
              <Image
                className={styles.modalImage}
                src={imgSrc}
                width={1000}
                height={650}
                alt={`Preview of ${title}`}
                sizes="(max-width: 760px) 90vw, 720px"
              />
            </figure>
          )}

          {modalImgSrc && (
            <figure className={styles.figure}>
              <Image
                className={styles.modalImage}
                src={modalImgSrc}
                width={1000}
                height={650}
                alt={`Preview of ${title}`}
                sizes="(max-width: 760px) 90vw, 720px"
              />
            </figure>
          )}

          {resources.length > 0 && (
            <section
              className={styles.modalFooter}
              aria-label="Research outputs and project resources"
            >
              <h3 className={styles.linksText}>Research outputs</h3>

              <div className={styles.links}>
                {resources.map((resource) => (
                  <Link
                    key={`${resource.type}-${resource.href}`}
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {resource.type === "poster" ||
                    resource.type === "paper" ||
                    resource.type === "manuscript" ? (
                      <PiBookOpenText aria-hidden="true" />
                    ) : (
                      <AiOutlineExport aria-hidden="true" />
                    )}

                    {resource.label}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {showReadMeSection && code && (
            <p className={styles.readmeNote}>
              Interested in the implementation details?{" "}
              <a
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.readme}
              >
                <PiBookOpenText aria-hidden="true" />
                Read the project README
              </a>
            </p>
          )}

          {review && (
            <section className={styles.modalFooter} aria-label="Project review">
              <h3 className={styles.linksText}>Feedback</h3>
              <blockquote className={styles.reviewText}>
                “{review}”{reviewer && <footer>— {reviewer}</footer>}
              </blockquote>
            </section>
          )}

          {((showSourceCode && code) ||
            (resources.length === 0 && projectLink) ||
            onTryBuzz) && (
            <section className={styles.modalFooter} aria-label="Project links">
              <h3 className={styles.linksText}>Explore the project</h3>

              <div className={styles.links}>
                {showSourceCode && code && (
                  <Link target="_blank" rel="noopener noreferrer" href={code}>
                    <AiFillGithub aria-hidden="true" />
                    Source code
                  </Link>
                )}

                {onTryBuzz && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      onTryBuzz();
                    }}
                    className={styles.projectAction}
                  >
                    <AiOutlineExport aria-hidden="true" />
                    Try Buzz
                  </button>
                )}
                {resources.length === 0 && projectLink && (
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={projectLink}
                  >
                    <AiOutlineExport aria-hidden="true" />
                    {isPaper
                      ? "View paper"
                      : isPoster
                        ? "View research poster"
                        : "Live project"}
                  </Link>
                )}
              </div>
            </section>
          )}
        </div>
      </motion.section>
    </div>,
    portalTarget,
  );
};
