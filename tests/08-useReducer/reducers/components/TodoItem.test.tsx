import { fireEvent, render, screen } from "@testing-library/react";
import { MOCK_TODO } from "../../../fixtures/todo";

import { TodoItem } from "../../../../src/08-useReducer/components/TodoItem";

describe("<TodoItem /> tests", () => {
  // MOCK_TODO
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should show Pending Todo", () => {
    render(
      <TodoItem
        todo={MOCK_TODO}
        onRemoveTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.classList).toContain("list-group-item");
    expect(screen.getByTestId("spanElement").classList).not.toContain(
      "text-decoration-line-through"
    );
    screen.getByText(MOCK_TODO.description);
  });

  it("should show Finished Todo", () => {
    MOCK_TODO.done = true;
    render(
      <TodoItem
        todo={MOCK_TODO}
        onRemoveTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    expect(screen.getByTestId("spanElement").classList).toContain(
      "text-decoration-line-through"
    );
    screen.getByText(MOCK_TODO.description);
  });

  it("should call events when clicking toggle and remove", () => {
    render(
      <TodoItem
        todo={MOCK_TODO}
        onRemoveTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByTestId("spanElement");
    const btnElement = screen.getByRole("button");

    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(MOCK_TODO.id);

    fireEvent.click(btnElement);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(MOCK_TODO.id);
  });
});
