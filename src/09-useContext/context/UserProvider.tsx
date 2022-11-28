import React from "react";
import { UserContext } from "./userContext";

const user = {
  id: 1,
  name: "Davo",
  email: "davo@davo.com",
};
export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
