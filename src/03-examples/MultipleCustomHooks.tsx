import React from "react";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const url = "https://www.breakingbadapi.com/api/quotes/1";
  const { data, isLoading, hasError } = useFetch(url);
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
