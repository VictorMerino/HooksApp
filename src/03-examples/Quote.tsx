import React from "react";
import { BBQuote } from "../types/BBQuote";

export const Quote = ({ quote }: { quote: BBQuote }) => {
  return (
    <blockquote>
      <p>
        <strong>Quote:</strong> {quote.quote}
      </p>
      <p>
        <strong>Author:</strong> {quote.author}
      </p>
    </blockquote>
  );
};
