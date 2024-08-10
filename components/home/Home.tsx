import React from "react";
import { SideBar } from "../nav/SideBar";
import { Hero } from "./hero/Hero";
import styles from "./home.module.scss";
import { Heading } from "../nav/Heading";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Certifications } from "./certifications/Certifications";
import { Experience } from "./experience/Experience";
import { Contact } from "./contact/Contact";

export const Home = () => {
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
          <div
            style={{
              height: "200px",
            }}
          />
        </main>
      </div>
    </>
  );
};
