import React from "react";
import { BBQuote } from "../types/BBQuote";

export const Quote = ({ quote }: { quote: BBQuote }) => {
  return <blockquote>{quote.quote}</blockquote>;
};
