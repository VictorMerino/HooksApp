import { useCounter } from "../hooks";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset, step } = useCounter({
    step: 5,
  });
  return (
    <>
      <h1>Counter With Custom Hook: {counter}</h1>
      <hr />
      <button className="btn btn-secondary" onClick={() => decrement()}>
        -{step}
      </button>
      <button className="btn btn-outline-dark" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-secondary" onClick={() => increment()}>
        +{step}
      </button>
    </>
  );
};
