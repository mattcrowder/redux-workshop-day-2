import * as actionTypes from "./actions";

const reducer = (state = {}, action = {}) => {
  if (action.type === actionTypes.ADD_TODO) {
    return {
      ...state,
      todos: [...state.todos, action.todo]
    };
  } else if (action.type === actionTypes.UPDATE_TODO) {
    return {
      ...state,
      todos: state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            ...action.payload
          };
        }
        return todo;
      })
    };
  } else if (action.type === actionTypes.DELETE_TODO) {
    return {
      ...state,
      todos: state.todos.filter(todo => {
        return todo.id !== action.id;
      })
    };
  }
  return state;
};

export default reducer;
