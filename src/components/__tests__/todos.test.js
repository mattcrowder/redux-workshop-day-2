import React from "react";
import { render } from "@testing-library/react";
import Todos from "../todos";

it("renders", () => {
  render(<Todos />);
});

it.skip(`renders when Todos is wrapped in a function that takes in two arguments, mapStateToProps, mapDispatchToProps
and then returns another Component`, () => {
  render(<Todos />);
});
