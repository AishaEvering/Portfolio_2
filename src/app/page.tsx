"use client";

import { Metadata } from "next";
import React from "react";
import styles from "./page.module.scss";
import { SideBar } from "@/components/nav/SideBar";
import { Heading } from "@/components/nav/Heading";
import { Hero } from "@/components/home/hero/Hero";
import { About } from "@/components/home/about/About";
import { Projects } from "@/components/home/projects/Projects";
import { Certifications } from "@/components/home/certifications/Certifications";
import { Experience } from "@/components/home/experience/Experience";
import { Contact } from "@/components/home/contact/Contact";
import { Footer } from "@/components/home/footer/Footer";
import ChatButton from "@/components/nav/components/ChatButton";
import { useState } from "react";

export default function Home() {
  const [isBuzzOpen, setIsBuzzOpen] = useState(false);

  return (
    <div className={styles.home}>
      <Heading />
      <SideBar />

      <main className={styles.content}>
        <Hero />
        <Projects onTryBuzz={() => setIsBuzzOpen(true)} />
        <About />
        <Certifications />
        <Experience />
        <Contact />
        <Footer />

        <ChatButton isOpen={isBuzzOpen} setIsOpen={setIsBuzzOpen} />

        <div style={{ height: "200px" }} />
      </main>
    </div>
  );
}
