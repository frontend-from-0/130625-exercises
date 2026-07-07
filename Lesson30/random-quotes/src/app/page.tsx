"use client";

import { useState } from "react";
import { quotes as initialQuotes } from "../quotes";
import QuoteCard from "../components/QuoteCard";

export default function Home() {
  const [quotes, setQuotes] = useState(initialQuotes);

  const handleLike = (index: number) => {
    const updatedQuotes = [...quotes];
    updatedQuotes[index].likeCount += 1;
    setQuotes(updatedQuotes);
  };

  return (
    <div>
      {quotes.map((q, index) => (
        <QuoteCard
          key={index}
          quoteData={q}
          onLike={() => handleLike(index)}
        />
      ))}
    </div>
  );
}
