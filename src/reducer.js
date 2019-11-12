const reducer = (state, action = {}) => {
  if (action.type === "ADD_TODO") {
    return [...state, action.todo];
  } else if (action.type === "UPDATE_TODO") {
    return state.map(todo => {
      if (todo.id === action.payload.id) {
        return {
          ...todo,
          ...action.payload
        };
      }
      return todo;
    });
  } else if (action.type === "DELETE_TODO") {
    return state.filter(todo => {
      return todo.id !== action.id;
    });
  }
  return state;
};

export default reducer;
