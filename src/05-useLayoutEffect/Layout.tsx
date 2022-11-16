import React from "react";
import { useFetch, useCounter } from "../hooks";
import { Quote, LoadingQuote } from "../components";
// TO-DO: use QuoteFlex element instead of the standard quote one, to use useLayoutEffect in it
// https://www.udemy.com/course/react-cero-experto/learn/lecture/19829382#overview
// https://reactjs.org/docs/hooks-reference.html#uselayouteffect
// But, as React team says:
// we recommend starting with useEffect first and only trying useLayoutEffect if that causes a problem.
import { BBQuote } from "../types/BBQuote";

export const Layout = () => {
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
      <h1>Breaking Bad quotes</h1>
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
