interface State {
  id: number;
  todo: string;
  done: boolean;
}

interface ReducerAction {
  type: string;
  payload: State;
}

const initialState: State[] = [
  {
    id: 1,
    todo: "Do the laundry",
    done: false,
  },
];

const todoReducer = (state = initialState, action = "") => {
  if (action.type === "[TODO add todo]") {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

const newTodo: State = {
  id: 2,
  todo: "Go shopping",
  done: false,
};

const addTodoAction: ReducerAction = {
  type: "[TODO add todo]",
  payload: newTodo,
};
todos = todoReducer(todos, addTodoAction);
console.log({ state: todos });
