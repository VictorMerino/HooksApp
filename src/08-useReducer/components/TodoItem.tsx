import { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  onDeleteTodo: Function;
}

export const TodoItem = ({ todo, onDeleteTodo }: TodoItemProps) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{todo.description}</span>
      <button
        className="btn btn-outline-danger"
        onClick={() => onDeleteTodo(todo.id)}
      >
        -
      </button>
    </li>
  );
};
