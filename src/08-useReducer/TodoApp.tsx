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
      <h1>TodoApp</h1>
      <hr />

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </>
  );
};
