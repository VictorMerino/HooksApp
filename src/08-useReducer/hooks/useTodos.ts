import { useEffect, useReducer } from "react";

import { initialState } from "../data/initialDummyData";

import { Todo } from "../types";
import { todoReducer } from "../reducers";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || initialState;
};

export const useTodos = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  const onNewTodo = (todo: Todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const onRemoveTodo = (todoId: number) => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: todoId,
    };
    console.log({ todoId });
    dispatch(action);
  };

  const onToggleTodo = (todoId: number) => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: todoId,
    };
    console.log({ todoId });
    dispatch(action);
  };
  return { state, onNewTodo, onRemoveTodo, onToggleTodo };
};
