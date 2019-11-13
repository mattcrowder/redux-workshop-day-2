import React from "react";
import App from "../app";
import { render } from "@testing-library/react";
it("renders with our own Redux Provider that takes in two props, a created store, and children", () => {
  render(<App />);
});
