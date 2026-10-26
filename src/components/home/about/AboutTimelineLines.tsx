"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./aboutTimelineLines.module.scss";

// Three strands positioned in the outer margin, column gap, and right edge.
// Each pair of paths has matching SVG commands, allowing a gentle morph.
const strands = [
  {
    id: "left",
    start: "M 75 -60 C 30 120, 20 240, 85 370 S 115 560, 55 780",
    drift: "M 75 -60 C 45 120, 12 240, 75 370 S 125 560, 55 780",
    color: "var(--timeline-one)",
    delay: 0,
  },
  {
    id: "middle",
    start: "M 565 -60 C 510 115, 620 225, 560 375 S 520 575, 595 780",
    drift: "M 565 -60 C 525 115, 605 225, 570 375 S 510 575, 595 780",
    color: "var(--timeline-two)",
    delay: 0.3,
  },
  {
    id: "right",
    start: "M 950 -60 C 900 135, 990 260, 935 395 S 905 585, 975 780",
    drift: "M 950 -60 C 915 135, 975 260, 945 395 S 895 585, 975 780",
    color: "var(--timeline-three)",
    delay: 0.6,
  },
];

export const AboutTimelineLines = () => {
  const reducedMotion = useReducedMotion();

  return (
    <div className={styles.timeline} aria-hidden="true">
      <motion.svg
        className={styles.svg}
        viewBox="0 0 1000 720"
        preserveAspectRatio="none"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {strands.map((strand, index) => (
          <Fragment key={strand.id}>
            <motion.path
              id={`timeline-strand-${strand.id}`}
              d={strand.start}
              stroke={strand.color}
              strokeWidth="1.7"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              fill="none"
              variants={{
                hidden: { pathLength: reducedMotion ? 1 : 0 },
                visible: {
                  pathLength: 1,
                  transition: {
                    duration: reducedMotion ? 0 : 2.7,
                    delay: reducedMotion ? 0 : strand.delay,
                    ease: "easeInOut",
                  },
                },
              }}
              // Path morphing starts after the drawing finishes. The long
              // stationary portions create an occasional, subtle wiggle.
              animate={
                reducedMotion
                  ? undefined
                  : {
                      d: [
                        strand.start,
                        strand.start,
                        strand.drift,
                        strand.start,
                        strand.start,
                      ],
                    }
              }
              transition={{
                d: {
                  duration: 18,
                  times: [0, 0.45, 0.58, 0.72, 1],
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3.5 + strand.delay,
                },
              }}
            />
            {!reducedMotion && (
              <g>
                {/* Soft outer halo */}
                <circle r="9" fill={strand.color} opacity="0.16">
                  <animateMotion
                    dur={`${18 + index * 5}s`}
                    begin={`${3 + index * 1.5}s`}
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath href={`#timeline-strand-${strand.id}`} />
                  </animateMotion>
                </circle>

                {/* Bright center */}
                <circle r="3.5" fill={strand.color} opacity="0.95">
                  <animateMotion
                    dur={`${18 + index * 5}s`}
                    begin={`${3 + index * 1.5}s`}
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath href={`#timeline-strand-${strand.id}`} />
                  </animateMotion>
                </circle>
              </g>
            )}
          </Fragment>
        ))}
      </motion.svg>
    </div>
  );
};
