import { todoReducer } from "../../src/08-useReducer/reducers";

describe("todoReducer tests", () => {
  const INITIAL_STATE = [
    {
      id: 1,
      description: "Demo TODO",
      done: false,
    },
  ];
  it("should return initial state", () => {
    const newState = todoReducer(INITIAL_STATE, {});
    expect(newState).toEqual(INITIAL_STATE);
  });
});
