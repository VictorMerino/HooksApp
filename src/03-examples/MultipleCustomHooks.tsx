import React from "react";
import { useFetch } from "../hooks/useFetch";

type BBQuote = {
  quoute_id: number;
  series: string;
  author: string;
  quote: string;
};
export const MultipleCustomHooks = () => {
  const url = "https://www.breakingbadapi.com/api/quotes/1";
  const {
    data,
    isLoading,
    hasError,
  }: { data: BBQuote[] | null; isLoading: boolean; hasError: boolean | null } =
    useFetch(url);
  return (
    <>
      <div>Breaking Bad quotes</div>
      <hr />

      {isLoading ? (
        <h3 className="alert alert-info">...Loading...</h3>
      ) : (
        <blockquote>{data && data[0].quote}</blockquote>
      )}
    </>
  );
};
