import React from "react";
import Todos from "./components/todos";
import createStore from "./create-store";
import reducer from "./reducer";
import { ReduxProvider } from "./react-redux";

const store = createStore(reducer, {
  todos: [
    {
      id: "one",
      message: "complete 360 feedback",
      status: "INCOMPLETE"
    },
    {
      id: "two",
      message: "attend react chapter",
      status: "INCOMPLETE"
    },
    {
      id: "three",
      message: "attend sail chapter",
      status: "COMPLETE"
    }
  ]
});

const App = () => {
  return (
    <ReduxProvider store={store}>
      <Todos />
    </ReduxProvider>
  );
};

export default App;
