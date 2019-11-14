import React from "react";
import { render as rtlRender, fireEvent } from "@testing-library/react";
import Todos from "../todos";
import { ReduxProvider } from "../../solutions/react-redux";
import createStore from "../../create-store";
import reducer from "../../reducer";

it("renders", () => {
  render(<Todos />);
});

it(`renders when Todos is wrapped in a function that takes in two arguments, mapStateToProps, mapDispatchToProps
and then returns another Component`, () => {
  render(<Todos />);
});

it(`displays incomplete todos (ideally) using getIncompleteTodos selector`, () => {
  const { getByLabelText } = render(<Todos />, {
    todos: [
      {
        id: "one",
        message: "attend react chapter",
        status: "INCOMPLETE"
      },
      {
        id: "two",
        message: "attend sail chapter",
        status: "INCOMPLETE"
      }
    ]
  });

  expect(
    getByLabelText(/incomplete attend react chapter/i)
  ).toBeInTheDocument();
  expect(getByLabelText(/incomplete attend sail chapter/i)).toBeInTheDocument();
});

it(`displays complete todos (ideally) using getCompleteTodos selector`, () => {
  const { getByLabelText, debug } = render(<Todos />, {
    todos: [
      {
        id: "three",
        message: "complete 360 feedback",
        status: "COMPLETE"
      },
      {
        id: "four",
        message: "attend sail chapter",
        status: "COMPLETE"
      }
    ]
  });
  expect(
    getByLabelText(/completed complete 360 feedback/i)
  ).toBeInTheDocument();
  expect(getByLabelText(/completed attend sail chapter/i)).toBeInTheDocument();
});

it(`updates todo messages properly`, () => {
  const { getByText, queryByText, getByLabelText } = render(<Todos />, {
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
      }
    ]
  });

  fireEvent.click(getByLabelText(`edit complete 360 feedback`));

  fireEvent.change(getByLabelText("message"), {
    target: { value: "attend all hands" }
  });

  fireEvent.click(getByLabelText("submit todo message update"));

  // the previous text is no longer there
  expect(queryByText(/complete 360 feedback/i)).toBeNull();

  expect(getByText(/attend all hands/i)).toBeInTheDocument();
});

it(`can delete todos`, () => {
  const { queryByText, getByLabelText } = render(<Todos />, {
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
      }
    ]
  });

  fireEvent.click(getByLabelText(`delete complete 360 feedback`));

  expect(queryByText(/complete 360 feedback/i)).toBeNull();
});

it(`when clicking on mark todo.message complete, it moves the message over to completed`, () => {
  const { queryByText, getByLabelText } = render(<Todos />, {
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
      }
    ]
  });
  expect(
    getByLabelText(/incomplete attend react chapter/i)
  ).toBeInTheDocument();
  fireEvent.click(getByLabelText("mark attend react chapter complete"));

  expect(getByLabelText(/completed attend react chapter/i)).toBeInTheDocument();
});

function render(ui, initialState = { todos: [] }) {
  const store = createStore(reducer, initialState);
  return rtlRender(<ReduxProvider store={store}>{ui}</ReduxProvider>);
}
