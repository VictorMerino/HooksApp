import React, { memo } from "react";

interface SonParams {
  number: number;
  increment: Function;
}

export const Son = memo(({ number, increment }: SonParams) => {
  console.log("  Me volví a generar :(  ");

  return (
    <button className="btn btn-primary me-3" onClick={() => increment(number)}>
      {number}
    </button>
  );
});
