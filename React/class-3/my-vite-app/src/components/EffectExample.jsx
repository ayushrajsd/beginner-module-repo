import { useState, useEffect } from "react";

function ExampleComponent() {
  const [count, setCount] = useState(0);

  console.log("Component render", count);

  useEffect(() => {
    console.log("useEffect run", count);
    document.title = `You clicked ${count} times`;
  }, [count]); // Dependency array

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer tick');
    }, 1000);
  
    // Cleanup function
    return () => {
      clearInterval(timer);
    };
  }, []);  // Runs only once on mount and unmount

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default ExampleComponent;
