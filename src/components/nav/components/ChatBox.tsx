"use client";

import { useEffect, useRef } from "react";
import { Message, useChat } from "ai/react";
import { motion, AnimatePresence } from "framer-motion";
import { SiProbot } from "react-icons/si";
import { MdClose, MdArrowUpward, MdRefresh } from "react-icons/md";
import ReactDOM from "react-dom";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

import styles from "./chatbox.module.scss";

interface Props {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const suggestions = [
  {
    label: "Explore BioTools",
    prompt: "Tell me about the BioTools project.",
  },
  {
    label: "Research experience",
    prompt: "Tell me about Aisha's computational biology research experience.",
  },
  {
    label: "Technical skills",
    prompt: "What are Aisha's technical skills?",
  },
];

export default function ChatBox({ isOpen, setIsOpen }: Props) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    append,
    setMessages,
    stop,
    error,
  } = useChat();

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messageContainerRef = useRef<HTMLDivElement>(null);

  const lastMessageIsUser = messages[messages.length - 1]?.role === "user";

  const loading = lastMessageIsUser;

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const container = messageContainerRef.current;

    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, setIsOpen]);

  const sendSuggestion = async (prompt: string) => {
    if (loading) return;

    await append({
      role: "user",
      content: prompt,
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !event.nativeEvent.isComposing
    ) {
      event.preventDefault();

      if (input.trim() && !loading) {
        event.currentTarget.form?.requestSubmit();
      }
    }
  };

  if (!isOpen) return null;

  const content = (
    <div className={styles.modal} onClick={() => setIsOpen(false)}>
      <motion.section
        role="dialog"
        aria-modal="true"
        aria-label="Chat with Buzz Lightyear"
        className={styles.chat}
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <header className={styles.chatHeader}>
          <div className={styles.avatarBox}>
            <SiProbot />
          </div>

          <div className={styles.headerText}>
            <h2>Buzz Lightyear</h2>
            <span>I'm here to help!</span>
          </div>

          <div className={styles.headerActions}>
            {messages.length > 0 && (
              <button
                type="button"
                className={styles.newChatButton}
                onClick={() => {
                  stop();
                  setMessages([]);
                  inputRef.current?.focus();
                }}
                aria-label="Start a new chat"
                title="New chat"
              >
                <MdRefresh />
              </button>
            )}

            <button
              type="button"
              className={styles.closeButton}
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
            >
              <MdClose />
            </button>
          </div>
        </header>

        {/* Conversation */}
        <div
          className={styles.messages}
          ref={messageContainerRef}
          aria-live="polite"
          aria-relevant="additions"
        >
          {messages.length === 0 ? (
            <div className={styles.welcome}>
              <h3>Curious about my work?</h3>

              <p>
                Ask me about my projects, research, technical experience, or
                career journey.
              </p>

              <div className={styles.suggestions}>
                {suggestions.map((suggestion) => (
                  <button
                    type="button"
                    key={suggestion.label}
                    onClick={() => sendSuggestion(suggestion.prompt)}
                    disabled={loading}
                  >
                    {suggestion.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className={styles.conversation}>
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}

              {loading && messages[messages.length - 1]?.role === "user" && (
                <div className={styles.thinking}>
                  <SiProbot />
                  <span>Buzz is thinking...</span>
                </div>
              )}

              {error && (
                <p className={styles.error}>
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          )}
        </div>

        {/* Input */}
        <form
          className={styles.messageBox}
          onSubmit={(event) => {
            if (!input.trim() || loading) {
              event.preventDefault();
              return;
            }

            handleSubmit(event);
          }}
        >
          <textarea
            ref={inputRef}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Ask Buzz something..."
            aria-label="Message Buzz"
            rows={1}
            className={styles.messageInput}
          />

          <button
            type="submit"
            className={styles.sendButton}
            aria-label="Send message"
            disabled={loading || !input.trim()}
          >
            <MdArrowUpward />
          </button>
        </form>
      </motion.section>
    </div>
  );

  return ReactDOM.createPortal(content, document.body);
}

interface ChatMessageProps {
  message: Message;
}

function ChatMessage({ message }: ChatMessageProps) {
  const isAssistant = message.role === "assistant";

  return (
    <div
      className={`${styles.message} ${
        isAssistant ? styles.assistantMessage : styles.userMessage
      }`}
    >
      {isAssistant && (
        <div className={styles.messageAvatar}>
          <SiProbot />
        </div>
      )}

      <div className={styles.messageBubble}>
        <ReactMarkdown
          components={{
            a: ({ node, ...props }) => {
              const external = props.href?.startsWith("http");

              return (
                <Link
                  href={props.href ?? "#"}
                  target={external ? "_blank" : "_self"}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  {props.children}
                </Link>
              );
            },
          }}
        >
          {message.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
