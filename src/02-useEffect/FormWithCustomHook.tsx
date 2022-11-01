import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, username, email, password } = useForm({
    username: "",
    email: "",
    password: "",
  });

  // const { username, email, password } = formState;

  return (
    <>
      <h1>Form with Custom Hook</h1>
      <hr />

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter username"
          name="username"
          value={username}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
      </div>

      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Enter your password"
          name="password"
          value={password}
          onChange={onInputChange}
        />
      </div>
    </>
  );
};
