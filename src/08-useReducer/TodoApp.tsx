import { TodoList, AddTodo } from "./components";

import { useTodos } from "./hooks/useTodos";

export const TodoApp = () => {
  const { todos, onNewTodo, onRemoveTodo, onToggleTodo } = useTodos();

  return (
    <>
      <h1>
        TodoApp: {todos.length} {""}
        <small>(pendientes: {todos.length})</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-12 col-sm-7">
          <TodoList
            todos={todos}
            onRemoveTodo={onRemoveTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>
        <div className="col-12 col-sm-5">
          <AddTodo onNewTodo={onNewTodo} />
        </div>
      </div>
    </>
  );
};
