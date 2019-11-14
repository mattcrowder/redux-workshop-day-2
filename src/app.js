import React from "react";
import Todos from "./components/todos";
import createStore from "./solutions/create-store";
import reducer from "./reducer";
import { ReduxProvider } from "./solutions/react-redux";

const store = createStore(reducer, { todos: [] });
const App = () => {
  return (
    <ReduxProvider store={store}>
      <Todos />
    </ReduxProvider>
  );
};

export default App;
