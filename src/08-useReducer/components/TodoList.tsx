import React from "react";

import { Todo } from "../types";
import { TodoItem } from ".";

export const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <ul className="list-group mb-4">
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </ul>
  );
};
