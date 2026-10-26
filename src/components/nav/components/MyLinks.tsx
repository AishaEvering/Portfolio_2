"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Github } from "lucide-react";
import { FiLinkedin, FiFileText } from "react-icons/fi";
import { Parisienne } from "next/font/google";
import styles from "./headinglinks.module.scss";

const signatureFont = Parisienne({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const MyLinks = () => {
  return (
    <div className={styles.links}>
      <Link
        href="#home"
        className={`${styles.signature} ${signatureFont.className}`}
        aria-label="Aisha Evering — Home"
      >
        Aisha Evering
      </Link>

      <div className={styles.socials}>
        <motion.a
          href="https://www.linkedin.com/in/aisha-evering-91580a3/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
        >
          <FiLinkedin size={19} />
        </motion.a>

        <motion.a
          href="https://github.com/AishaEvering"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
        >
          <Github size={20} strokeWidth={1.8} />
        </motion.a>
        <motion.a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View resume (opens in a new tab)"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
        >
          <FiFileText size={19} strokeWidth={1.7} />
        </motion.a>
      </div>
    </div>
  );
};
