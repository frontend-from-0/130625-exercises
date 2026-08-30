"use client";

import { useQuotes } from "../context/QuotesContext";
import { useTheme } from "../context/ThemeContext";
import QuoteCard from "../components/QuoteCard";

export default function Home() {
  const { quotes, currentQuoteIndex, handleLike, handleNextQuote } =
    useQuotes();

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-6">
      <button
  onClick={toggleTheme}
  className="mt-4 border border-gray-500 px-4 py-2 rounded"
>


        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <QuoteCard
        quoteData={quotes[currentQuoteIndex]}
        onLike={handleLike}
      />
      <button onClick={handleNextQuote} className="mt-4 border px-4 py-2">
        Next Quote
      </button>
    </div>
  );
}
