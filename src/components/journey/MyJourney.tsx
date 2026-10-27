import { Heading } from "@/components/nav/Heading";
import { SideBar } from "@/components/nav/SideBar";
import { Footer } from "@/components/home/footer/Footer";
import styles from "./myJourney.module.scss";
import { JourneyBotanical } from "./about/JourneyBotanical";
import { JourneyChapter } from "./about/JourneyChapter";
import { JourneyConnections } from "./about/JourneyConnections";
import { AsuGarden } from "./about/AsuGarden";
import { BeyondTheScreen } from "./about/BeyondTheScreen";
import { EducationSection } from "./education/EducationSection";
import { SkillsSection } from "./skills/SkillsSection";
import { ExperienceSection } from "./experience/ExperienceSection";
import { AboutSectionNav } from "./AboutSectionNav";

export function MyJourney() {
  return (
    <div className={styles.journey}>
      <Heading />
      <SideBar />

      <main className={styles.content}>
        <section className={styles.intro} aria-labelledby="journey-title">
          <JourneyBotanical />
          <div className={styles.introInner}>
            <div className={styles.introCopy}>
              <p className={styles.eyebrow}>THE JOURNEY SO FAR</p>
              <h1 id="journey-title">
                A career built on <em>curiosity.</em>
              </h1>
              <p className={styles.lead}>
                I spent more than two decades building software. Then biology
                opened up an entirely new world of questions, and gave me new
                reasons to keep building.
              </p>
              <p className={styles.introNote}>
                This is the story of how engineering, research, and curiosity
                came together.
              </p>
              <a className={styles.exploreLink} href="#journey-chapters">
                Explore my journey <span aria-hidden="true">↘</span>
              </a>
            </div>
            <div className={styles.portraitFrame}>
              <div className={styles.portraitPlaceholder}>
                <img
                  src="/journey-imgs/bw_tilted_smile.png"
                  alt="Portrait of Aisha"
                  className={styles.portraitImage}
                />
              </div>

              <span className={styles.portraitCaption}>
                ENGINEER · RESEARCHER · MAKER
              </span>
            </div>
          </div>
        </section>
        <AboutSectionNav />
        <section
          className={styles.photoNote}
          aria-labelledby="photo-note-title"
        >
          <span className={styles.photoNoteEyebrow}>
            A NOTE ABOUT THE PHOTOGRAPHS
          </span>

          <h2 id="photo-note-title">There is more to a story than a career.</h2>

          <p>
            As I share the journey that brought me from software engineering to
            computational biology, you'll also find photographs from my life
            along the way. They may not always relate to the chapter beside
            them, but they're part of my story, too.
          </p>
        </section>
        <section id="journey-chapters" className={styles.chapters}>
          <JourneyConnections />
          <JourneyChapter
            number="01"
            label="THE ENGINEER"
            title="It started with a love of building things."
            image="/journey-imgs/tunnel.png"
            imageAlt="Walking in Cali"
            paragraphs={[
              "For more than two decades, software engineering was my world. I learned to take complicated problems, understand the people behind them, and build solutions that were useful, reliable, and thoughtfully designed.",
              "Over the years, I worked across languages, frameworks, and technologies. The tools changed, but the part I loved most stayed the same: figuring out how things work and finding better ways to make them work.",
              "I didn't know it yet, but that curiosity would eventually lead me somewhere entirely new.",
            ]}
          />
          <JourneyChapter
            number="02"
            label="A NEW CURIOSITY"
            title="Then I started looking for something more."
            image="/journey-imgs/football.jpg"
            imageAlt="Cowboy Stadium"
            reverse
            paragraphs={[
              "I wanted to find work that felt more meaningful, both to me and to society. I began exploring new directions, starting with user experience design and eventually discovering machine learning.",
              "Machine learning fascinated me. I enjoyed teaching myself, but I wanted to go beyond what I could learn independently. That curiosity led me to consider graduate school.",
              "While researching graduate programs, I discovered bioinformatics. Suddenly, everything clicked. I could combine my programming skills with biological research and contribute to something deeply important to me: the fight against cancer.",
              "That was it. I'd found what I was looking for.",
            ]}
          />
          <section
            className={styles.asuSection}
            aria-label="Arizona State University chapter"
          >
            <AsuGarden />
            <JourneyChapter
              number="03"
              label="BECOMING A RESEARCHER"
              title="Learning to ask different questions."
              image="/journey-imgs/sedona.png"
              variant="asu"
              imageAlt="Sedona"
              paragraphs={[
                "Graduate school introduced me to an entirely different way of thinking. I was no longer just learning how to build solutions. I was learning how to investigate questions, evaluate evidence, and understand the biological systems behind the data.",

                "Through coursework and research, I explored genetics, genomics, transcriptomics, and phylogenetics. I worked with biological datasets, learned new computational tools, and began to understand how much thought goes into producing reliable scientific results.",

                "One of my most rewarding experiences was studying the evolution of Dmc1 homologs across Metamonada. From analyzing phylogenetic trees to interpreting evolutionary relationships, I experienced what it meant to contribute to a scientific investigation.",

                "And somewhere along the way, I realized something: I didn't just enjoy using scientific software. I was fascinated by how it worked, how it was designed, and how I could make it better.",
              ]}
            />
          </section>
          <section>
            <JourneyChapter
              number="04"
              label="WHERE BOTH WORLDS MEET"
              title="Two worlds. One purpose."
              image="/journey-imgs/desk.jpg"
              imageAlt="Desk"
              reverse
              paragraphs={[
                "BioTools was one of the first projects where I brought my software engineering experience and my growing knowledge of bioinformatics together. I built an interactive application for constructing SAMtools commands visually, turning a command-line workflow into something researchers could explore and customize through an interface.",

                "But my interests extend beyond developing tools. I enjoy working directly with biological data, investigating scientific questions, and discovering what computational analyses can reveal. Whether I'm building an application, developing a workflow, or analyzing research data, I find satisfaction in understanding the problem and working toward a meaningful solution.",

                "What excites me most about computational biology is how much there is still to explore. New questions, new methods, new technologies, and opportunities to contribute to research that matters.",

                "I don't know exactly where this journey will lead next. But I'm excited to find out.",
              ]}
            />
          </section>
        </section>
        <div id="beyond-the-screen" className={styles.navTarget}>
          <BeyondTheScreen />
        </div>
        <div id="education" className={styles.navTarget}>
          <EducationSection />
        </div>
        <div id="skills" className={styles.navTarget}>
          <SkillsSection />
        </div>
        <div id="experience" className={styles.navTarget}>
          <ExperienceSection />
        </div>
        <Footer />
      </main>
    </div>
  );
}
