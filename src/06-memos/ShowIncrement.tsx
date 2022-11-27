import React, { memo } from "react";

export const ShowIncrement = memo(({ increment }: { increment: Function }) => {
  console.log("Me volví a generar");
  return (
    <button className="btn btn-primary" onClick={() => increment()}>
      Increment
    </button>
  );
});
