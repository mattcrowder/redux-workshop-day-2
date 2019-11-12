import reducer from "../reducer";

test("reducer returns the state you pass in when action is empty", () => {
  expect(reducer({})).toEqual({});
});
let state = reducer([]);
test(`when passing in an action with type 'ADD_TODO', it adds that item to the list`, () => {
  const todo = {
    id: "a random id",
    message: "do the laundry",
    status: "INCOMPLETE"
  };
  state = reducer(state, {
    type: "ADD_TODO",
    todo
  });
  expect(state).toEqual([todo]);

  const todo2 = {
    id: "another random id",
    message: "mow the lawn",
    status: "INCOMPLETE"
  };
  state = reducer(state, { type: "ADD_TODO", todo: todo2 });

  expect(state).toEqual([todo, todo2]);
});

test(`when passing in an action with type UPDATE_TODO,
it updates the corresponding todo based on the id provided`, () => {
  const payload = {
    id: "a random id",
    message: "clean the bathroom"
  };

  const payload2 = {
    id: "another random id",
    status: "COMPLETED"
  };
  state = reducer(state, { type: "UPDATE_TODO", payload });
  expect(state[0]).toMatchObject(payload);

  state = reducer(state, { type: "UPDATE_TODO", payload: payload2 });
  expect(state[1]).toMatchObject(payload2);
});

test(`when passing in an action with type DELETE_TODO, 
it deletes the corresponding TODO based on the id provided
`, () => {
  const id = "a random id";
  state = reducer(state, { type: "DELETE_TODO", id });

  expect(state.find(todo => todo.id === "a random id")).toEqual(undefined);
});
