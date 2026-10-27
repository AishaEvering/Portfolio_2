"use client";

import { Metadata } from "next";
import React from "react";
import styles from "./page.module.scss";
import { SideBar } from "@/components/nav/SideBar";
import { Heading } from "@/components/nav/Heading";
import { Hero } from "@/components/home/hero/Hero";
import { About } from "@/components/home/about/About";
import { Projects } from "@/components/home/projects/Projects";
import { Footer } from "@/components/home/footer/Footer";
import { useBuzz } from "@/components/buzz/BuzzProvider";

export default function Home() {
  const { openBuzz } = useBuzz();

  return (
    <>
      <Heading />

      <div className={styles.home}>
        <SideBar />

        <main className={styles.content}>
          <Hero />
          <Projects onTryBuzz={openBuzz} />
          <About />
          <Footer />
          <div style={{ height: "200px" }} />
        </main>
      </div>
    </>
  );
}
