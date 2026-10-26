"use client";

import { Dispatch, SetStateAction } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SiProbot } from "react-icons/si";
import ChatBox from "./ChatBox";
import styles from "./chatbutton.module.scss";

interface ChatButtonProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ChatButton({ isOpen, setIsOpen }: ChatButtonProps) {
  const reducedMotion = useReducedMotion();

  return (
    <>
      <div className={styles.floatingBuzz}>
        <motion.div
          animate={reducedMotion ? undefined : { y: [0, -7, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.button
            type="button"
            className={styles.chatboxicon}
            aria-label="Chat with Buzz Lightyear"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
            whileHover={reducedMotion ? undefined : { scale: 1.08, rotate: -4 }}
            whileTap={{ scale: 0.96 }}
          >
            <SiProbot className={styles.icon} />
          </motion.button>
        </motion.div>

        <span className={styles.caption}>ASK BUZZ</span>
      </div>

      <ChatBox setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
}
