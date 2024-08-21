"use client";
import { Message, useChat } from "ai/react";
import styles from "./chatbox.module.scss";
import { useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { SiProbot } from "react-icons/si";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
}

export default function ChatBox({ setIsOpen, isOpen }: Props) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    error,
  } = useChat();

  const [loading, setLoading] = useState<boolean>(false);
  const lastMessageIsUser = messages[messages.length - 1]?.role === "user";

  useEffect(() => {
    scrollToBottom();
    setLoading(lastMessageIsUser);
  }, [messages]);

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        scrollToBottom();
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // prevent new line in textarea
      // Create a fake form event to pass to handleSubmit
      const fakeEvent = {
        ...event,
        currentTarget: event.currentTarget.closest("form") as HTMLFormElement,
        preventDefault: () => event.preventDefault(),
      } as React.FormEvent<HTMLFormElement>;
      handleSubmit(fakeEvent);
    }
  };

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  };

  const content = (
    <div className={styles.modal} onClick={() => setIsOpen(false)}>
      <button className={styles.closeModalBtn}>
        <MdClose />
      </button>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={
          loading ? `${styles.chat} ${styles.loading}` : `${styles.chat}`
        }
      >
        <div className={styles.chat_title}>
          <h1>Buzz Lightyear</h1>
          <h2>I&apos;m here to help!</h2>
          <SiProbot className={styles.avatar} />
        </div>
        <div className={styles.messages} ref={messageContainerRef}>
          <div className={styles.message_content}>
            {messages.map((message) => (
              <ChatMessage message={message} key={message.id} />
            ))}
            {loading && lastMessageIsUser && (
              <ChatMessage
                message={{
                  id: "loading",
                  role: "assistant",
                  content: "thinking...",
                }}
              />
            )}
            {error && (
              <ChatMessage
                message={{
                  id: "error",
                  role: "assistant",
                  content: "Something went wrong. Please try again!",
                }}
              />
            )}
            {!error && messages.length === 0 && (
              <div className={styles.placeholder}>
                <SiProbot size="2.4rem" className={styles.icon} />
                <p className={styles.placeholdermsg}>
                  Hello, nice to meet you. How can I help?
                </p>
                <p className={styles.placeholdersubmsg}>
                  You can ask me any question about Aisha and I will find the
                  relevant information on this portfolio.
                </p>
                <p className={styles.signature}>-- Buzz</p>
              </div>
            )}
          </div>
        </div>
        <form
          id="chatForm"
          onSubmit={handleSubmit}
          noValidate
          className={styles.message_box}
        >
          <textarea
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Ask something..."
            className={styles.message_input}
            ref={inputRef}
          />
          <button
            onClick={() => setMessages(messages)}
            type="submit"
            className={styles.message_submit}
            title="Submit message"
            disabled={loading || input.length === 0}
          >
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById("root"));
}

interface ChatMessageProps {
  message: Message;
}

function ChatMessage({ message: { id, role, content } }: ChatMessageProps) {
  const isAiMessage = role === "assistant";
  const roleClassName = isAiMessage ? styles.aimessage : styles.usermessage;

  return (
    <div className={`${styles.message} ${styles.new} ${roleClassName}`}>
      {isAiMessage && <SiProbot className={styles.avatar} />}
      <ReactMarkdown
        components={{
          a: ({ node, ref, ...props }) => {
            const isExternalLink = props.href?.startsWith("http");

            return (
              <Link
                {...props}
                href={props.href ?? ""}
                className={styles.link}
                target={isExternalLink ? "_blank" : "_self"}
                rel={isExternalLink ? "nofollow" : undefined}
              />
            );
          },
          p: ({ node, ...props }) => (
            <p {...props} className={styles.paragraph} />
          ),
          ul: ({ node, ...props }) => (
            <ul {...props} className={styles.unoderedlists} />
          ),
          li: ({ node, ...props }) => (
            <li {...props} className={styles.listitem} />
          ),
          i: ({ node, ...props }) => (
            <i {...props} className={styles.italicText} />
          ),
          b: ({ node, ...props }) => (
            <b {...props} className={styles.boldText} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
      <span></span>
    </div>
  );
}
