import React from "react";
import { useFetch, useCounter } from "../hooks";

type BBQuote = {
  quoute_id: number;
  series: string;
  author: string;
  quote: string;
};
export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter({ initialValue: 1, step: 1 });
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
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

      <button
        className="btn btn-primary"
        onClick={() => increment()}
        disabled={isLoading}
      >
        Get next quote
      </button>
    </>
  );
};
