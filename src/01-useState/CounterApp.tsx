import { useState } from "react";

export const CounterApp = () => {
  const [counters, setCounters] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });
  return (
    <>
      <h1></h1>
      <h2>
        Counter1: {counters.counter1}
        <button
          className="btn btn-secondary"
          onClick={() =>
            setCounters({
              counter1: counters.counter1 + 1,
              counter2: counters.counter2,
              counter3: counters.counter3,
            })
          }
        >
          +1
        </button>
      </h2>

      <hr />
      <h2>
        Counter2: {counters.counter2}
        <button
          className="btn btn-secondary"
          onClick={() =>
            setCounters({
              counter1: counters.counter1,
              counter2: counters.counter2 + 1,
              counter3: counters.counter3,
            })
          }
        >
          +1
        </button>
      </h2>

      <hr />
      <h2>
        Counter3 {counters.counter3}
        <button
          className="btn btn-secondary"
          onClick={() =>
            setCounters({
              counter1: counters.counter1,
              counter2: counters.counter2,
              counter3: counters.counter3 + 1,
            })
          }
        >
          +1
        </button>
      </h2>

      <hr />
    </>
  );
};
