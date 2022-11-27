import { ChangeEvent, FormEvent, useState } from "react";
import { useForm } from "../../hooks";

export const AddTodo = ({ onNewTodo }: { onNewTodo: Function }) => {
  const { formState, onInputChange, todoValue } = useForm({ todoValue: "" });
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onNewTodo(formState);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Add TO-DO</label>
      <input
        type="text"
        placeholder="What to do?"
        name="todoValue"
        className="form-control"
        onChange={onInputChange}
        value={todoValue}
      />
      <button type="submit" className="btn btn-outline-primary">
        +
      </button>
    </form>
  );
};
