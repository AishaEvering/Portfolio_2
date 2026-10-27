"use client";

import { useEffect, useId, useRef, useState } from "react";
import styles from "./journeyConnections.module.scss";

type Connector = { d: string; length: number; endY: number; startY: number };

/** Draws only the gaps between existing chapter SVGs. It never changes their animations. */
export function JourneyConnections() {
  const ref = useRef<SVGSVGElement>(null);
  const gradientId = useId().replace(/:/g, "");
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [connectors, setConnectors] = useState<Connector[]>([]);
  const [grown, setGrown] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const svg = ref.current;
    const section = svg?.parentElement;
    if (!section) return;

    let frame = 0;
    const measure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = section.getBoundingClientRect();
        // The existing vine SVGs are the true endpoints, on desktop and mobile.
        const vines = Array.from(section.querySelectorAll<SVGSVGElement>("[data-chapter-vine]"));
        if (vines.length !== 4) return;
        const rectangles = vines.map((vine) => vine.getBoundingClientRect());
        const next = rectangles.slice(0, -1).map((a, i) => {
          const b = rectangles[i + 1];
          const x1 = a.left + a.width / 2 - bounds.left;
          const y1 = a.bottom - bounds.top;
          const x2 = b.left + b.width / 2 - bounds.left;
          const y2 = b.top - bounds.top;
          const gap = y2 - y1;
          const bend = Math.min(14, Math.max(4, Math.abs(gap) * 0.035));
          const d = `M ${x1} ${y1} C ${x1 + bend} ${y1 + gap * 0.35}, ${x2 - bend} ${y2 - gap * 0.35}, ${x2} ${y2}`;
          return { d, length: Math.max(1, Math.abs(gap) + Math.abs(x2 - x1) + 30), startY: y1, endY: y2 };
        });
        setConnectors(next);
        setSize({ width: section.clientWidth, height: section.scrollHeight });
      });
    };

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(section);
    section.querySelectorAll("[data-chapter-vine]").forEach((el) => resizeObserver.observe(el));
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure).catch(() => {});
    measure();
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    if (connectors.length !== 3) return;
    const check = () => {
      const svg = ref.current;
      if (!svg) return;
      const top = svg.getBoundingClientRect().top;
      const trigger = window.innerHeight * 0.7;
      setGrown((previous) => previous.map((value, i) => value || top + connectors[i].startY <= trigger));
    };
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    check();
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [connectors]);

  return (
    <svg
      ref={ref}
      className={styles.connections}
      width={size.width}
      height={size.height}
      viewBox={`0 0 ${Math.max(1, size.width)} ${Math.max(1, size.height)}`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${gradientId}-to-gold`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--journey-copper)" />
          <stop offset="100%" stopColor="var(--connection-gold)" />
        </linearGradient>
        <linearGradient id={`${gradientId}-to-copper`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--connection-gold)" />
          <stop offset="100%" stopColor="var(--journey-copper)" />
        </linearGradient>
      </defs>
      {connectors.map((connector, i) => (
        <path
          key={i}
          d={connector.d}
          className={`${styles.connection} ${grown[i] ? styles.grown : ""}`}
          stroke={i === 0 ? "var(--journey-copper)" : `url(#${gradientId}-${i === 1 ? "to-gold" : "to-copper"})`}
          style={{ strokeDasharray: connector.length, strokeDashoffset: grown[i] ? 0 : connector.length }}
        />
      ))}
    </svg>
  );
}
