import React from "react";
import Todos from "./components/todos";
import createStore from "./create-store";
import reducer from "./reducer";
import { ReduxProvider } from "./react-redux";

const store = createStore(reducer, { todos: [] });
const App = () => {
  return (
    <ReduxProvider store={store}>
      <Todos />
    </ReduxProvider>
  );
};

export default App;
