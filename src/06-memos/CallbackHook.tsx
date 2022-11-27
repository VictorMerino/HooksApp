import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  /* const increment = () => {
    setCounter(counter + 1);
  }; */
  return (
    <>
      <h1>useCallbackHook: {counter}</h1>
      <ShowIncrement increment={increment} />
    </>
  );
};
