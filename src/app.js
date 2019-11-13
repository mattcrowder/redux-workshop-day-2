import React from "react";
import Todos from "./components/todos";
import createStore from "./create-store";
import reducer from "./reducer";
import { ReduxProvider } from "./react-redux";
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : { todos: [] };
const store = createStore(reducer, { todos: [] });
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
const App = () => {
  return (
    <ReduxProvider store={store}>
      <Todos />
    </ReduxProvider>
  );
};

export default App;
