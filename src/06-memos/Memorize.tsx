import React, { useState } from "react";
import { useCounter } from "../hooks";
import { SmallMemorized } from "./SmallMemorized";

export const Memorize = () => {
  const { counter, increment } = useCounter({ initialValue: 1 });
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>
        Counter: <SmallMemorized value={counter} />
      </h1>
      <hr />

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      <hr />
      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
