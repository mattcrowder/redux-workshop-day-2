import createStore from "../create-store";
import reducer from "../reducer";
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
  const store = createStore(reducer, []);

  expect(store.getState()).toEqual([]);
  const todo = {
    id: "a random id",
    message: "Go to the react chapter",
    status: "INCOMPLETE"
  };
  store.dispatch({ type: "ADD_TODO", todo });
  expect(store.getState()).toEqual([todo]);
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
  const store = createStore(reducer, [
    {
      id: "a random id",
      message: "Go to the react chapter",
      status: "INCOMPLETE"
    }
  ]);
  const subscription = jest.fn();
  store.subscribe(subscription);
  const id = "a random id";
  store.dispatch({ type: "DELETE_TODO", id });
  expect(store.getState()).toEqual([]);

  expect(subscription).toHaveBeenCalled();
});

test(`when dispatching an action that returns a function, 
you can dispatch multiple actions on it`, () => {
  const store = createStore(reducer, []);
  const subscription = jest.fn();
  store.subscribe(subscription);
  const action = () => {
    return dispatch => {
      try {
        dispatch({ type: "START_LOADING" });
        dispatch({
          type: "ADD_TODO",
          todo: {
            id: "a random id",
            message: "clean laundry",
            status: "INCOMPLETE"
          }
        });
      } catch (e) {
      } finally {
        dispatch({ type: "STOP_LOADING" });
      }
    };
  };
  store.dispatch(action());

  expect(store.getState()).toEqual([
    { id: "a random id", message: "clean laundry", status: "INCOMPLETE" },
    { id: "another random id", message: "clean dishes", status: "INCOMPLETE" },
    { id: "aasdf", message: "clean sheets", status: "INCOMPLETE" }
  ]);

  expect(subscription).toHaveBeenCalledTimes(3);
});
