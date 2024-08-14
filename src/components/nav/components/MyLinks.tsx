"use client";
import styles from "./headinglinks.module.scss";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";
import ChatButton from "./ChatButton";

export const MyLinks = () => {
  return (
    <div className={styles.links}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link
          href="https://www.linkedin.com/in/aisha-evering-91580a3/"
          target="_blank"
          rel="nofollow"
        >
          <AiFillLinkedin size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link
          href="https://github.com/AishaEvering"
          target="_blank"
          rel="nofollow"
        >
          <AiFillGithub size="2.4rem" />
        </Link>
      </motion.span>

      <ChatButton />
    </div>
  );
};
