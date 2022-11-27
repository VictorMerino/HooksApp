import React, { useReducer } from "react";

import { Todo } from "./types";
import { TodoList, AddTodo } from "./components";
import { todoReducer } from "./reducers";

import { initialState } from "./data/initialDummyData";

export const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const onNewTodo = (todo: Todo) => {
    console.log({ todo });
  };

  const onRemoveTodo = (todo: Todo) => {
    console.log({ todo });
  };
  return (
    <>
      <h1>
        TodoApp: 3 <small>(pendientes: 2)</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-12 col-sm-7">
          <TodoList todos={initialState} />
        </div>
        <div className="col-12 col-sm-5">
          <AddTodo onNewTodo={onNewTodo} />
        </div>
      </div>
    </>
  );
};
