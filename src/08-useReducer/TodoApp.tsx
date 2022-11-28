import { TodoList, AddTodo } from "./components";

import { useTodos } from "./hooks/useTodos";

export const TodoApp = () => {
  // useTodo
  // todos, onNewTodo, onRemoveTodo, onToggleTodo
  const { state, onNewTodo, onRemoveTodo, onToggleTodo } = useTodos();

  return (
    <>
      <h1>
        TodoApp: {state.length} {""}
        <small>(pendientes: {state.length})</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-12 col-sm-7">
          <TodoList
            todos={state}
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
