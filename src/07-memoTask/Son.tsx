import React from "react";

export const Son = ({
  number,
  increment,
}: {
  number: number;
  increment: Function;
}) => {
  console.log("  Me volví a generar :(  ");

  return (
    <button className="btn btn-primary me-3" onClick={() => increment(number)}>
      {number}
    </button>
  );
};
