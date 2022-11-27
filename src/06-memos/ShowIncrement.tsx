import React from "react";

export const ShowIncrement = ({ increment }: { increment: Function }) => {
  console.log("Me volví a generar");
  return (
    <button className="btn btn-primary" onClick={() => increment()}>
      Increment
    </button>
  );
};
