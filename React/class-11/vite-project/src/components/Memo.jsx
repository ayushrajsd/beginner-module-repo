import React, { useState } from 'react';

// A simple Counter component
const Counter = React.memo(({ count }) => {
  console.log('Counter component re-rendered');
  return <div>Counter: {count}</div>;
});

const Memo = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const toggleOtherState = () => {
    setOtherState(!otherState);
  };

  return (
    <div>
      <h1>React.memo Example</h1>
      <Counter count={count} />
      <button onClick={incrementCount}>Increment Counter</button>
      <button onClick={toggleOtherState}>Toggle Other State</button>
    </div>
  );
};

export default Memo;