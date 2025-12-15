import React, { useReducer } from 'react';

const stateManager = (value, signal) => {
    console.log("rendered")
  if (signal === 'add') {
    return value + 1;
  } else if (signal === 'subtract') {
    return value - 1;
  } else {
    return value;
  }
};

function NumberTracker() {
  const [total, trigger] = useReducer(stateManager, 0);

  return (
    <div>
      <h1>Total: {total}</h1>
      <button onClick={() => trigger('add')}>Increase</button>
      <button onClick={() => trigger('subtract')}>Decrease</button>
    </div>
  );
}

export default NumberTracker;