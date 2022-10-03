import { useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Davoles",
    email: "davoles@vic.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(name, value);
  };
  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mb-3"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};
