import { render, screen } from "@testing-library/react";
import { useTodos } from "../../src/08-useReducer/hooks";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { MOCK_TODO, MOCK_TODO_2 } from "../fixtures/todo";

jest.mock("../../src/08-useReducer/hooks");

describe("<TodoApp /> tests", () => {
  const TODOS = {
    todos: [MOCK_TODO, MOCK_TODO_2],
    todosCount: 2,
    todosPendingCount: 2,
  };
  useTodos.mockReturnValue({
    ...TODOS,
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    handleNewTodo: jest.fn(),
  });
  it("should show correctly the component", () => {
    render(<TodoApp />);

    console.log(screen.getByRole("heading").textContent);
    expect(screen.getByRole("heading").textContent).toContain(
      `TodoApp: ${TODOS.todosCount}`
    );
    expect(screen.getByRole("heading").textContent).toContain(
      `pendientes: ${TODOS.todosPendingCount}`
    );

    screen.getByText(MOCK_TODO.description);
    screen.getByText(MOCK_TODO_2.description);
  });
});
