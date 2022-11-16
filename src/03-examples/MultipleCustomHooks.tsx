import React from "react";
import { useFetch, useCounter } from "../hooks";
import { Quote } from "./Quote";
import { LoadingQuote } from "./LoadingQuote";
import { BBQuote } from "../types/BBQuote";

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

      {isLoading ? <LoadingQuote /> : data && <Quote quote={data[0]} />}

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
