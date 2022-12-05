import { renderHook } from "@testing-library/react";

import { useCounter } from "../../src/hooks/useCounter";

const DEFAULT_VALUES = {
  initialValue: 10,
  minValue: 0,
  maxValue: 20,
  step: 1,
};

describe("useCounter", () => {
  it("return default values", () => {
    const { result } = renderHook(() => useCounter({}));
    const { counter, increment, decrement, step } = result.current;
    expect(counter).toBe(DEFAULT_VALUES.initialValue);
    // expect(increment()).toBe(DEFAULT_VALUES.initialValue + DEFAULT_VALUES.step);
    // expect(decrement()).toBe(DEFAULT_VALUES.initialValue - DEFAULT_VALUES.step);
    expect(step).toBe(DEFAULT_VALUES.step);
  });

  it("return user setted values", () => {
    const SETTED_VALUES = {
      initialValue: 100,
      step: 5,
    };
    const { result } = renderHook(() => useCounter(SETTED_VALUES));
    const { counter, step } = result.current;
    expect(counter).toBe(SETTED_VALUES.initialValue);
    expect(step).toBe(SETTED_VALUES.step);
  });
});
