import { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  onRemoveTodo: Function;
  onToggleTodo: Function;
}

export const TodoItem = ({
  todo,
  onRemoveTodo,
  onToggleTodo,
}: TodoItemProps) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        data-testid="spanElement"
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.description}
      </span>
      <button
        className="btn btn-outline-danger"
        onClick={() => onRemoveTodo(todo.id)}
      >
        -
      </button>
    </li>
  );
};
