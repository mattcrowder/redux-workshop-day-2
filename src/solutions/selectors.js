// https://github.com/reduxjs/reselect

const getIncompleteTodos = state => {
  return state.todos.filter(todo => todo.status === "INCOMPLETE");
};

const getCompleteTodos = state => {
  return state.todos.filter(todo => todo.status === "COMPLETE");
};
