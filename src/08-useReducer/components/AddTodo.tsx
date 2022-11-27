import { ChangeEvent, FormEvent, useState } from "react";

export const AddTodo = ({ onNewTodo }: { onNewTodo: Function }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onNewTodo(inputValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Add TO-DO</label>
      <input
        type="text"
        placeholder="What to do?"
        className="form-control"
        onChange={handleInputChange}
        value={inputValue}
      />
      <button type="submit" className="btn btn-outline-primary">
        +
      </button>
    </form>
  );
};
