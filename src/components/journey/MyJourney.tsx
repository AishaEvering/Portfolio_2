import { Heading } from "@/components/nav/Heading";
import { SideBar } from "@/components/nav/SideBar";
import { Footer } from "@/components/home/footer/Footer";
import styles from "./myJourney.module.scss";
import { JourneyBotanical } from "./JourneyBotanical";

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
                opened up an entirely new world of questions—and gave me new
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
                  src="/bw_tilted_smile.png"
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

        <section id="journey-chapters" className={styles.nextChapter}>
          <span className={styles.chapterMarker}>01 / THE ENGINEER</span>
          <h2>It started with a love of building things.</h2>
          <p>The first chapter of the story begins here.</p>
        </section>
        <Footer />
      </main>
    </div>
  );
}
