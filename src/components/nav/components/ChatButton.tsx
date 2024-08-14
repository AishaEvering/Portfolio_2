"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { FaRobot } from "react-icons/fa6";
import styles from "./chatbutton.module.scss";
import { useEffect, useRef, useState } from "react";
import ChatBox from "./ChatBox";
import { SiProbot } from "react-icons/si";

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.button
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        onClick={() => setIsOpen(true)}
        className={styles.chatboxicon}
      >
        <SiProbot size="2.4rem" className={styles.icon} />
      </motion.button>
      <ChatBox setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
}
