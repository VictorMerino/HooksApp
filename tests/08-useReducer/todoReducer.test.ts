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

  it("should add a todo", () => {
    const action = {
      type: "[TODO] Add Todo",
      payload: {
        id: 2,
        description: "New TODO",
        done: false,
      },
    };
    const newState = todoReducer(INITIAL_STATE, action);
    expect(newState.length).toEqual(2);
    expect(newState).toContain(action.payload);
  });

  it("should remove a todo", () => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: 1,
    };
    const newState = todoReducer(INITIAL_STATE, action);
    expect(newState.length).toEqual(0);
  });

  it("should update a todo", () => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: 1,
    };
    const newState = todoReducer(INITIAL_STATE, action);
    expect(newState.length).toEqual(1);
    expect(newState[0].done).toEqual(true);
    // TO-DO: check why INITIAL_STATE object is changing
    expect(newState[0].done).toEqual(INITIAL_STATE[0].done);
  });
});
