import { useState } from "react";

export const useCounter = ({
  initialValue = 10,
  minValue = 0,
  maxValue = 20,
  step = 1,
}) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = step) => {
    if (counter === maxValue) return;
    setCounter((current) => current + value);
  };

  const decrement = (value = step) => {
    if (counter === minValue) return;
    setCounter((current) => current - value);
  };

  const reset = () => {
    setCounter(initialValue);
  };
  return { counter, increment, decrement, reset, step };
};
