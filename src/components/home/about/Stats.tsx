"use client";
import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
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
              title={"Bachelors of Science"}
              school={"University of Advancing Technology"}
              focus={"Concentraion on Software Engineering"}
              time={"2001"}
            ></Education>
            <Education
              title={"Associates of Science"}
              school={"University of Advancing Technology"}
              focus={"Concentration on Application Development"}
              time={"2000"}
            ></Education>
            <Education
              title={"Associates of Science"}
              school={"Texas State Technical College"}
              focus={"Concentration of Laser Electro-Optics"}
              time={"1997"}
            ></Education>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">React</span>
            <span className="chip">Redux</span>
            <span className="chip">Dart</span>
            <span className="chip">Java</span>
            <span className="chip">C#</span>
            <span className="chip">Git</span>
            <span className="chip">GitHub</span>
            <span className="chip">Jira</span>
            <span className="chip">JSON</span>
            <span className="chip">SQL</span>
            <span className="chip">T-SQL</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">AWS</span>
            <span className="chip">Pandas</span>
            <span className="chip">PyTorch</span>
            <span className="chip">Scikit-Learn</span>
            <span className="chip">TensorFlow</span>
            <span className="chip">Figma</span>
            <span className="chip">Numpy</span>
            <span className="chip">Matplotlib</span>
            <span className="chip">Seaborn</span>
            <span className="chip">Next.js</span>
            <span className="chip">LangChain</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
