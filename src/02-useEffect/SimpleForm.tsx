import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Davoles",
    email: "davoles@vic.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }: { target: HTMLInputElement }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("Form State changed");
  }, [formState]);

  useEffect(() => {
    // This can be used to validate emails against Kickbox, for example
    // console.log("Email changed.");
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input
        type="text"
        className="form-control mt-3"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      {username === "DavolesVic" && <Message />}

      <input
        type="email"
        className="form-control mt-3"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};
