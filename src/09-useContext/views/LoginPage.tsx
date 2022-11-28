import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

export const LoginPage = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <h2>LoginPage</h2>
    </>
  );
};
