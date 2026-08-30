"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { quotes as initialQuotes } from "../quotes";

type Quote = {
  quote: string;
  author: string;
  likeCount: number;
};

type QuotesContextType = {
  quotes: Quote[];
  currentQuoteIndex: number;
  handleLike: () => void;
  handleNextQuote: () => void;
};

const QuotesContext = createContext<QuotesContextType | undefined>(undefined);

export function QuotesProvider({ children }: { children: ReactNode }) {
  const [quotes, setQuotes] = useState(initialQuotes);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const handleLike = () => {
    const updatedQuotes = [...quotes];
    updatedQuotes[currentQuoteIndex].likeCount += 1;
    setQuotes(updatedQuotes);
  };

  const handleNextQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuoteIndex(randomIndex);
  };

  return (
    <QuotesContext.Provider
      value={{ quotes, currentQuoteIndex, handleLike, handleNextQuote }}
    >
      {children}
    </QuotesContext.Provider>
  );
}

export function useQuotes() {
  const context = useContext(QuotesContext);
  if (!context) {
    throw new Error("useQuotes must be used within QuotesProvider");
  }
  return context;
}
