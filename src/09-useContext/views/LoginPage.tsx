import React, { useContext } from "react";
import { useForm } from "../../hooks";
import { UserContext } from "../context/UserContext";

const dummyUser = {
  id: 1,
  name: "Davo",
  email: "davo@davo.com",
};

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  const { formState, onInputChange, name, email } = useForm({
    name: dummyUser.name,
    email: dummyUser.email,
  });
  return (
    <>
      <h2>LoginPage</h2>

      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            value={dummyUser.name}
            onChange={onInputChange}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={dummyUser.email}
            onChange={onInputChange}
            readOnly
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Yes, it's me
          </label>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setUser(dummyUser)}
        >
          Submit
        </button>
      </form>
    </>
  );
};
