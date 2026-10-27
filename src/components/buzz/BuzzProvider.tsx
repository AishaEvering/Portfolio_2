"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

import ChatButton from "@/components/nav/components/ChatButton";

type BuzzContextType = {
  openBuzz: () => void;
  closeBuzz: () => void;
};

const BuzzContext = createContext<BuzzContextType | null>(null);

export function BuzzProvider({ children }: { children: ReactNode }) {
  const [isBuzzOpen, setIsBuzzOpen] = useState(false);

  return (
    <BuzzContext.Provider
      value={{
        openBuzz: () => setIsBuzzOpen(true),
        closeBuzz: () => setIsBuzzOpen(false),
      }}
    >
      {children}
      <ChatButton isOpen={isBuzzOpen} setIsOpen={setIsBuzzOpen} />
    </BuzzContext.Provider>
  );
}

export function useBuzz() {
  const context = useContext(BuzzContext);

  if (!context) {
    throw new Error("useBuzz must be used inside BuzzProvider");
  }

  return context;
}
