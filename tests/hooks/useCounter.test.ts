import { act, renderHook } from "@testing-library/react";

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
    const { counter, step } = result.current;
    expect(counter).toBe(DEFAULT_VALUES.initialValue);
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

  it("return incremented value", () => {
    const { result } = renderHook(() => useCounter({}));
    const { increment } = result.current;

    act(() => increment());

    // We need to get the counter after the the act, so that it has actually changed
    const { counter } = result.current;
    expect(counter).toBe(DEFAULT_VALUES.initialValue + DEFAULT_VALUES.step);
  });

  it("return decremented value", () => {
    const { result } = renderHook(() => useCounter({}));
    const { decrement } = result.current;

    act(() => decrement());

    // We need to get the counter after the the act, so that it has actually changed
    const { counter } = result.current;
    expect(counter).toBe(DEFAULT_VALUES.initialValue - DEFAULT_VALUES.step);
  });
});
