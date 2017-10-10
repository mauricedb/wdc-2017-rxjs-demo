const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return Object.assign({}, state, { count: state.count + 1 });

    case "DECREMENT":
      return Object.assign({}, state, { count: state.count - 1 });

    case "RENAME":
      return Object.assign({}, state, { firstName: action.payload });

    default:
      return state;
  }
};

module.exports = reducer;
