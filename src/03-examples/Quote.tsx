import React from "react";
import { BBQuote } from "../types/BBQuote";

export const Quote = ({ data }: { data: BBQuote }) => {
  return <blockquote>{data && data[0].quote}</blockquote>;
};
