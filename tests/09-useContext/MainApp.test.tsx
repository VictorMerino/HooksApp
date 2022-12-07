import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { MainApp } from "../../src/09-useContext/MainApp";
describe("<MainApp /> test", () => {
  it("should show HomePage by default", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { level: 2 }).textContent).toContain(
      "HomePage"
    );
  });

  it("should show LoginPage if route is /login", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { level: 2 }).textContent).toContain(
      "LoginPage"
    );
    expect(screen.getByText("Login").closest("a")?.className).toContain(
      "active"
    );
  });
});
