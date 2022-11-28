import React from "react";

import { Todo } from "../types";
import { TodoItem } from ".";

interface TodoListProps {
  todos: Todo[];
  onRemoveTodo: Function;
}

export const TodoList = ({ todos, onRemoveTodo }: TodoListProps) => {
  return (
    <ul className="list-group mb-4">
      {todos.map((todo) => {
        return (
          <TodoItem todo={todo} key={todo.id} onRemoveTodo={onRemoveTodo} />
        );
      })}
    </ul>
  );
};
