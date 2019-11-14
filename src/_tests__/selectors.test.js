import { getIncompleteTodos, getCompleteTodos } from "../selectors";
const state = {
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
};
test.skip("getIncompleteTodos returns all the todos with status INCOMPLETE", () => {
  expect(getIncompleteTodos(state)).toEqual([
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
  ]);
});

test.skip("getCompleteTodos returns all the todos with status COMPLETE", () => {
  expect(getCompleteTodos(state)).toEqual([
    {
      id: "three",
      message: "attend sail chapter",
      status: "COMPLETE"
    }
  ]);
});
