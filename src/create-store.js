const createStore = (reducer = () => {}, initialState) => {
  let state = initialState;
  const getState = () => state;
  let subscriptions = [];

  const dispatch = action => {
    if (typeof action === "function") {
      action(dispatch);
    } else {
      state = reducer(state, action);
      subscriptions.forEach(s => s());
    }
  };
  const subscribe = s => {
    subscriptions.push(s);
  };
  return {
    getState,
    dispatch,
    subscribe
  };
};

export default createStore;
