"use client";
import styles from "./stats.module.scss";
import {
  AiFillCode,
  AiFillCodeSandboxSquare,
  AiFillSmile,
} from "react-icons/ai";
import { RiSchoolFill } from "react-icons/ri";
import { Reveal } from "@/components/utils/Reveal";
import { Education } from "./Educaiton";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <RiSchoolFill size="2.4rem" color="var(--brand)" />
            <span>Education</span>
          </h4>
          <div className={styles.statGrid}>
            <Education
              title={"Master of Science"}
              school={"Arizona State University"}
              focus={"Computational Life Sciences"}
              time={"2026"}
            ></Education>
            <Education
              title={"Bachelors of Science"}
              school={"University of Advancing Technology"}
              focus={"Software Engineering"}
              time={"2001"}
            ></Education>
            <Education
              title={"Associates of Science"}
              school={"University of Advancing Technology"}
              focus={"Application Development"}
              time={"2000"}
            ></Education>
            <Education
              title={"Associates of Science"}
              school={"Texas State Technical College"}
              focus={"Laser Electro-Optics"}
              time={"1997"}
            ></Education>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCodeSandboxSquare size="2.4rem" color="var(--brand)" />
            <span>Bioinformatics</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">SAMtools</span>
            <span className="chip">DESeq2</span>
            <span className="chip">clusterProfiler</span>
            <span className="chip">MAFFT</span>
            <span className="chip">IQ-TREE</span>
            <span className="chip">EukPhylo</span>
            <span className="chip">RNA-Seq</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCodeSandboxSquare size="2.4rem" color="var(--brand)" />
            <span>Scientific computing</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Python</span>
            <span className="chip">R</span>
            <span className="chip">Pandas</span>
            <span className="chip">Numpy</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCodeSandboxSquare size="2.4rem" color="var(--brand)" />
            <span>Machine Learning</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Scikit-Learn</span>
            <span className="chip">PyTorch</span>
            <span className="chip">Pandas</span>
            <span className="chip">Numpy</span>
            <span className="chip">TensorFlow</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCodeSandboxSquare size="2.4rem" color="var(--brand)" />
            <span>Visualization</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">ggplot2</span>
            <span className="chip">Matplotlib</span>
            <span className="chip">Seaborn</span>
            <span className="chip">Tableau</span>
            <span className="chip">Quarto</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCodeSandboxSquare size="2.4rem" color="var(--brand)" />
            <span>AI applications</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">LangChain</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Engineering Stack</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">SQL</span>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">React</span>
            <span className="chip">Redux</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">Java</span>
            <span className="chip">Dart</span>
            <span className="chip">C#</span>
            <span className="chip">.NET</span>
            <span className="chip">Git</span>
            <span className="chip">GitHub</span>
            <span className="chip">Jira</span>
            <span className="chip">Next.js</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
