import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Todos from "./components/todos";

function App() {
  return <Todos />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
