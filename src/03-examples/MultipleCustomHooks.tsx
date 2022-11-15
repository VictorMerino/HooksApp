import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";

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

      <button className="btn btn-primary" onClick={() => increment()}>
        Get next quote
      </button>
    </>
  );
};
