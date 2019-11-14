// https://github.com/reduxjs/reselect

export const getIncompleteTodos = state => {
  return state.todos.filter(todo => todo.status === "INCOMPLETE");
};

export const getCompleteTodos = state => {
  return state.todos.filter(todo => todo.status === "COMPLETE");
};
