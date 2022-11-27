import React, { useReducer } from "react";

import { todoReducer } from "./todoReducer";

export const TodoApp = () => {
  const initialState = [
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
  return (
    <>
      <h1>
        TodoApp: 3 <small>(pendientes: 2)</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-12 col-sm-7">
          <ul className="list-group mb-4">
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
