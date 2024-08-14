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

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main>
          <Heading />
          <Hero />
          <About />
          <Projects />
          <Certifications />
          <Experience />
          <Contact />
          <Footer />
          <div
            style={{
              height: "200px",
            }}
          />
        </main>
      </div>
    </>
  );
}
