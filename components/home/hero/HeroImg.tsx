import { useEffect, useState } from "react";
import styles from "./heroimg.module.scss";
import { motion } from "framer-motion";
import { Reveal } from "@/components/utils/Reveal";
import { useTheme } from "next-themes";

export const HeroImg = () => {
  const lightThemeImage = "/project-imgs/hero-pic.png";
  const darkThemeImage = "/project-imgs/hero-pic-dark.jpeg";

  const { resolvedTheme } = useTheme();
  const [imageUrl, setImageUrl] = useState(lightThemeImage);

  useEffect(() => {
    const themeImage =
      resolvedTheme === "dark" ? darkThemeImage : lightThemeImage;
    setImageUrl(`${themeImage}?v=${new Date().getTime()}`);
  }, [resolvedTheme]);

  return (
    <div className={styles.heroimg}>
      <Reveal>
        <div className={styles.heroimgColumn}>
          <div className={styles.heroimgGrid}>
            <img src={imageUrl} alt="Hero Image" />

            <motion.svg
              className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
              fill="transparent"
              viewBox="0 0 506 506"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                className={styles.circle}
                cx="253"
                cy="253"
                r="250"
                stroke="#E118B2"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                  strokeDasharray: [
                    "15 120 25 25",
                    "16 25 92 72",
                    "4 250 22 22",
                  ],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.svg>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
