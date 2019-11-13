import React from "react";
import Todo from "./todo";

const Todos = props => {
  return props.todos.map(todo => {
    return <Todo key={todo.id} todo={todo} />;
  });
};

Todos.defaultProps = {
  todos: [
    {
      id: "a random id",
      message: "Do laundry"
    }
  ]
};
export default Todos;
