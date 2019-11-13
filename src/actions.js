import shortid from "shortid";

export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const addTodo = message => {
  return {
    type: ADD_TODO,
    todo: {
      message,
      id: shortid.generate(),
      status: "INCOMPLETE"
    }
  };
};

export const updateTodo = todo => {
  return {
    type: UPDATE_TODO,
    payload: todo
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id
  };
};
