import React, { useEffect, useReducer } from "react";

import { Todo } from "./types";
import { TodoList, AddTodo } from "./components";
import { todoReducer } from "./reducers";

import { initialState } from "./data/initialDummyData";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || initialState;
};

export const TodoApp = () => {
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
  return (
    <>
      <h1>
        TodoApp: 3 <small>(pendientes: 2)</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-12 col-sm-7">
          <TodoList todos={state} onDeleteTodo={onRemoveTodo} />
        </div>
        <div className="col-12 col-sm-5">
          <AddTodo onNewTodo={onNewTodo} />
        </div>
      </div>
    </>
  );
};
