import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>Counter With Custom Hook: {counter}</h1>
      <hr />
      <button className="btn btn-secondary" onClick={decrement}>
        -1
      </button>
      <button className="btn btn-outline-dark" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-secondary" onClick={increment}>
        +1
      </button>
    </>
  );
};
