"use client";

import { useState } from "react";
import styles from "./hairdetectiongallery.module.scss";

const demonstrations = [
  {
    id: "image",
    label: "Image",
    src: "/project-imgs/black_hair_imgs.gif",
    alt: "Black Hair Detection image upload demonstration",
    description: "Detecting hairstyles in uploaded images.",
  },
  {
    id: "video",
    label: "Video",
    src: "/project-imgs/black_hair_vid.gif",
    alt: "Black Hair Detection video upload demonstration",
    description: "Running hairstyle detection on uploaded videos.",
  },
  {
    id: "camera",
    label: "Live Camera",
    src: "/project-imgs/black_hair_me.gif",
    alt: "Black Hair Detection live camera demonstration",
    description: "Running hairstyle detection using a webcam.",
  },
] as const;

type DemoId = (typeof demonstrations)[number]["id"];

export function HairDetectionGallery() {
  const [activeDemo, setActiveDemo] = useState<DemoId>("image");

  const selected = demonstrations.find((demo) => demo.id === activeDemo)!;

  return (
    <div className={styles.gallery}>
      <div
        className={styles.tabs}
        role="tablist"
        aria-label="Detection demonstration"
      >
        {demonstrations.map((demo) => (
          <button
            key={demo.id}
            type="button"
            role="tab"
            id={`hair-tab-${demo.id}`}
            aria-selected={activeDemo === demo.id}
            aria-controls="hair-demo-panel"
            onClick={() => setActiveDemo(demo.id)}
            className={`${styles.tab} ${
              activeDemo === demo.id ? styles.active : ""
            }`}
          >
            {demo.label}
          </button>
        ))}
      </div>

      <div
        id="hair-demo-panel"
        role="tabpanel"
        aria-labelledby={`hair-tab-${selected.id}`}
        className={styles.panel}
      >
        <img
          key={selected.src}
          src={selected.src}
          alt={selected.alt}
          loading="lazy"
        />
        <p className={styles.description}>{selected.description}</p>
      </div>
    </div>
  );
}
