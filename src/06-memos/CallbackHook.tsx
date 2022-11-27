import React, { useState } from "react";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  return (
    <>
      <h1>useCallbackHook: {counter}</h1>
    </>
  );
};
