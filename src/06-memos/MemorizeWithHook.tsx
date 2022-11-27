import React, { useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationNumber = 100) => {
  for (let index = 0; index < iterationNumber; index++) {
    console.log("Lets goooo");
  }
  return `${iterationNumber} times`;
};

export const MemorizeWithHook = () => {
  const { counter, increment } = useCounter({ initialValue: 1 });
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4> {heavyStuff(1500)}</h4>

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
