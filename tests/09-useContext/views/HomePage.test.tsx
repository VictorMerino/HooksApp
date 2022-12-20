import { render } from "@testing-library/react";
import React from "react";

import { UserContext } from "../../../src/09-useContext/context/UserContext";
import { HomePage } from "../../../src/09-useContext/views/HomePage";

describe("<HomePage /> tests", () => {
  const user = { id: 1, name: "Davo", email: "davo@davo.com" };
  it("renders page without user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
  });
});
