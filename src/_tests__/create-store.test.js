import createStore from "../create-store";
import reducer from "../reducer";
import { addTodo, deleteTodo } from "../actions";
test("It returns an object", () => {
  const store = createStore();
  expect(store).toMatchObject({});
});

test(`createStore returns an object that has a
method called getState, which returns the state
that you initially passed into createStore`, () => {
  const store = createStore(() => {}, {});
  expect(store.getState()).toEqual({});
});

test(`createStore returns an object that has
a method called dispatch which takes in an action,
and that action updates the state
`, () => {
  const store = createStore(reducer, { todos: [] });

  expect(store.getState().todos).toEqual([]);
  const message = "Go to the react chapter";
  store.dispatch(addTodo(message));
  expect(store.getState().todos[0]).toMatchObject({
    message,
    status: "INCOMPLETE"
  });
});

test(`createStore returns an object that has
a method called subscribe which takes a function
and adds that function to an array `, () => {
  // even though there are no asserts in here, that's ok,
  // this is contrived anyways. I wouldn't recommend actually
  // writing a test like this in production
  const store = createStore(() => {}, {});
  store.subscribe(() => {});
});

test(`when calling subscribe on the store, that function
passed into subscribe will get invoked after
 a dispatch happens`, () => {
  const store = createStore(reducer, {
    todos: [
      {
        id: "a random id",
        message: "Go to the react chapter",
        status: "INCOMPLETE"
      }
    ]
  });
  const subscription = jest.fn();
  store.subscribe(subscription);
  const id = "a random id";
  store.dispatch(deleteTodo(id));
  expect(store.getState().todos).toEqual([]);

  expect(subscription).toHaveBeenCalled();
});

test(`when dispatching an action that returns a function,
you can dispatch multiple actions on it`, () => {
  const store = createStore(reducer, { todos: [] });
  const subscription = jest.fn();
  store.subscribe(subscription);
  const action = () => {
    return dispatch => {
      try {
        dispatch({ type: "START_LOADING" });
        dispatch(addTodo("clean laundry"));
        dispatch(addTodo("clean dishes"));
        dispatch(addTodo("clean sheets"));
      } catch (e) {
      } finally {
        dispatch({ type: "STOP_LOADING" });
      }
    };
  };
  store.dispatch(action());
  expect(store.getState().todos[0]).toMatchObject({
    message: "clean laundry",
    status: "INCOMPLETE"
  });
  expect(store.getState().todos[1]).toMatchObject({
    message: "clean dishes",
    status: "INCOMPLETE"
  });
  expect(store.getState().todos[2]).toMatchObject({
    message: "clean sheets",
    status: "INCOMPLETE"
  });

  expect(subscription).toHaveBeenCalledTimes(5);
});
