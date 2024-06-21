import React, { useState, useMemo } from "react";

const generateLargeArray = () => {
  console.time("generateLargeArray");
  const largeArray = [];
  for (let i = 0; i < 1000000; i++) {
    largeArray.push(i);
  }
  console.timeEnd("generateLargeArray");
  return largeArray;
};

const sumArray = (arr) => {
  console.log("Calculating sum...");
  return arr.reduce((acc, curr) => acc + curr, 0);
};

const LargeArraySum = () => {
  const [count, setCount] = useState(0);
  const largeArray = useMemo(() => generateLargeArray(), []);

  const sum = useMemo(() => sumArray(largeArray), [largeArray]);

  return (
    <div>
      <h1>Sum: {sum}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default LargeArraySum;
