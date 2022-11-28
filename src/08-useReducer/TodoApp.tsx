import { TodoList, AddTodo } from "./components";

import { useTodos } from "./hooks";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    todosPendingCount,
    onNewTodo,
    onRemoveTodo,
    onToggleTodo,
  } = useTodos();

  return (
    <>
      <h1>
        TodoApp: {todosCount} {""}
        <small>(pendientes: {todosPendingCount})</small>
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
