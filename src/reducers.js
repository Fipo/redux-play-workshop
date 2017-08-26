const defaultState = { value: 0 };

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, { value: state.value + 1 });
    case 'DECREMENT':
      return Object.assign({}, { value: state.value - 1 });
    default:
      return state;
  }
};

export default rootReducer;
