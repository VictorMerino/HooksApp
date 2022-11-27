import React, { useReducer } from "react";

import { Todo } from "./types/Todo";
import { todoReducer } from "./todoReducer";

export const TodoApp = () => {
  const initialState: Todo[] = [
    {
      id: new Date().getTime(),
      description: "Do the laundry",
      done: false,
    },
    {
      id: new Date().getTime() + 1,
      description: "Go shopping",
      done: false,
    },
  ];
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const onNewTodo = (todo: Todo) => {
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
          // TodoList todos
          <ul className="list-group mb-4">
            //TodoItem todo
            <li className="list-group-item d-flex justify-content-between">
              <span className="align-self-center">Item 1</span>
              <button className="btn btn-outline-danger">-</button>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span className="align-self-center">Item 2</span>
              <button className="btn btn-outline-danger">-</button>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span className="align-self-center">Item 3</span>
              <button className="btn btn-outline-danger">-</button>
            </li>
          </ul>
        </div>
        <div className="col-12 col-sm-5">
          // AddTodo onNewTodo( todo )
          <form>
            <label>Add TO-DO</label>
            <input
              type="text"
              placeholder="What to do?"
              className="form-control"
            />
            <button type="submit" className="btn btn-outline-primary">
              +
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
