import styles from "./beyondTheScreen.module.scss";

const photos = [
  {
    src: "/journey-imgs/plants.png",
    alt: "My plants",
    caption: "Plants",
    className: styles.photoOne,
  },
  {
    src: "/journey-imgs/hiking.jpg",
    alt: "A hiking adventure",
    caption: "On the trail",
    className: styles.photoTwo,
  },
  {
    src: "/journey-imgs/lego.png",
    alt: "One of my LEGO creations",
    caption: "LEGO",
    className: styles.photoThree,
  },
  {
    src: "/journey-imgs/museum.png",
    alt: "Museum Art",
    caption: "Museum",
    className: styles.photoFour,
  },
  {
    src: "/journey-imgs/jupiter.jpg",
    alt: "The best dog in the world, Jupiter.",
    caption: "Jupiter 💚",
    className: styles.photoFive,
  },
];

export function BeyondTheScreen() {
  return (
    <section className={styles.section} aria-labelledby="beyond-screen-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>BEYOND THE SCREEN</p>
          <h2 id="beyond-screen-title">More than code and biology.</h2>
          <p>
            When I'm not writing code or exploring biological questions, I'm
            probably tending to my plants, building something with LEGO, getting
            lost in a game, or finding another trail to wander. Curiosity
            doesn't stop when I close my laptop.
          </p>
        </div>
        <div
          className={styles.collage}
          aria-label="A collection of moments outside work"
        >
          {photos.map((photo) => (
            <figure
              key={photo.caption}
              className={`${styles.polaroid} ${photo.className}`}
            >
              <div className={styles.imageWrap}>
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </div>
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
