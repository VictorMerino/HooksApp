import { useState } from "react";

export const useCounter = (
  initialValue = 10,
  minValue = 0,
  maxValue = 20,
  step = 1
) => {
  const [counter, setCounter] = useState((initialValue = 10));

  const increment = () => {
    if (counter === maxValue) return;
    setCounter(counter + step);
  };

  const decrement = () => {
    if (counter === minValue) return;
    setCounter(counter - step);
  };

  const reset = () => {
    setCounter(initialValue);
  };
  return { counter, increment, decrement, reset };
};
