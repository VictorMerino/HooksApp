import { useEffect, useReducer } from "react";

import { initialState } from "../data/initialDummyData";

import { Todo } from "../types";
import { todoReducer } from "../reducers";
import { getItems, setItem } from "../services/LocalStorageRepository";

const init = () => {
  return getItems() || initialState;
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    setItem(todos);
  }, [todos]);

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
    dispatch(action);
  };

  const onToggleTodo = (todoId: number) => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: todoId,
    };
    dispatch(action);
  };
  // TO-DO: get pendingTodos
  return { todos, onNewTodo, onRemoveTodo, onToggleTodo };
};
