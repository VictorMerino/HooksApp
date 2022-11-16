import React from "react";
import { BBQuote } from "../types/BBQuote";

export const Quote = ({ quote }: { quote: BBQuote }) => {
  return (
    <blockquote>
      Quote: {quote.quote}
      <hr />
      Author: {quote.author}
    </blockquote>
  );
};
