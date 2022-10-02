import { useState } from "react";

export const useCounter = (initialValue = 10, minValue = 0) => {
  const [counter, setCounter] = useState((initialValue = 10));

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter === minValue) return;
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialValue);
  };
  return { counter, increment, decrement, reset };
};
