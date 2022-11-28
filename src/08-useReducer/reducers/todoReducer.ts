import { Todo } from "../types";

// @ts-expect-error
export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialState, action.payload];

    case "[TODO] Remove Todo":
      return initialState.filter((todo: Todo) => todo.id !== action.payload);

    default:
      return initialState;
  }
};
