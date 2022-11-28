import React from "react";

import { Todo } from "../types";
import { TodoItem } from ".";

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: Function;
}

export const TodoList = ({ todos, onDeleteTodo }: TodoListProps) => {
  return (
    <ul className="list-group mb-4">
      {todos.map((todo) => {
        return (
          <TodoItem todo={todo} key={todo.id} onDeleteTodo={onDeleteTodo} />
        );
      })}
    </ul>
  );
};
