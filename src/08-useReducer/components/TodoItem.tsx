import { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  onRemoveTodo: Function;
}

export const TodoItem = ({ todo, onRemoveTodo }: TodoItemProps) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{todo.description}</span>
      <button
        className="btn btn-outline-danger"
        onClick={() => onRemoveTodo(todo.id)}
      >
        -
      </button>
    </li>
  );
};
