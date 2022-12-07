import { FormEvent } from "react";
import { useForm } from "../../hooks";
// import { Todo } from "../types";

export const AddTodo = ({ onNewTodo } /* : { onNewTodo: Function } */) => {
  // @ts-expect-error
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });
  const handleSubmit = (event /* : FormEvent */) => {
    event.preventDefault();
    if (!description.length) return;

    const newTodo /* : Todo */ = {
      id: new Date().getTime(),
      description,
      done: false,
    };
    onNewTodo(newTodo);
    onResetForm();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Add TO-DO</label>
      <div className="input-group">
        <input
          type="text"
          placeholder="What to do?"
          name="description"
          className="form-control"
          onChange={onInputChange}
          value={description}
        />
        <button type="submit" className="btn btn-outline-primary">
          +
        </button>
      </div>
    </form>
  );
};
