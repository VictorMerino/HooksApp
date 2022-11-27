import React, { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationNumber = 100) => {
  for (let index = 0; index < iterationNumber; index++) {
    console.log("Lets goooo");
  }
  return `${iterationNumber} times`;
};

export const MemorizeWithHook = () => {
  const { counter, increment } = useCounter({ initialValue: 4000 });
  const [show, setShow] = useState(true);

  // Memorize the value each time the counter value changes
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);
  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4> {memorizedValue}</h4>

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
