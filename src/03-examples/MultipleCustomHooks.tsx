import React from "react";
import { useFetch, useCounter } from "../hooks";
import { Quote, LoadingQuote } from "../components";
// import { BBQuote } from "../types/BBQuote";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter({ initialValue: 1, step: 1 });
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  const {
    data,
    isLoading,
    hasError,
  } /* : { data: BBQuote[] | null; isLoading: boolean; hasError: boolean | null } */ =
    useFetch(url);

  return (
    <>
      <h1>Breaking Bad quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : data && <Quote quote={data[0]} />}

      <button
        className="btn btn-primary"
        onClick={() => increment()}
        disabled={isLoading}
        data-testid="nextQuote"
      >
        Get next quote
      </button>
    </>
  );
};
