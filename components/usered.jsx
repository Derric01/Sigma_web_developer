import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
};

export default function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="my-4">
      <h2>useReducer Demo</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
