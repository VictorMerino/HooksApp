import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, email, password } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  // const { username, email, password } = formState;

  // react-hook-form: custom hook that can be used for this stuff

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

      <button className="btn btn-primary mt-2" onClick={onResetForm}>
        Reset
      </button>
    </>
  );
};
