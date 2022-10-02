import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter } = useCounter();
  return (
    <>
      <h1>Counter With Custom Hook: {counter}</h1>
      <hr />
      <button className="btn btn-secondary" onClick={() => {}}>
        -1
      </button>
      <button className="btn btn-outline-dark" onClick={() => {}}>
        Reset
      </button>
      <button className="btn btn-secondary" onClick={() => {}}>
        +1
      </button>
    </>
  );
};
