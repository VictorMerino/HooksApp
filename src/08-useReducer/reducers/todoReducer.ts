// @ts-expect-error
export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case "ABC":
      throw new Error("Action.type = ABC not implemented");
      break;

    default:
      return initialState;
  }
};
