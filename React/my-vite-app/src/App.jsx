import "./App.css";
import { useState } from "react";
import Form from './components/Form'

function App() {
  // Define a state variable named "count" and a function to update it, "setCount"
  const [count, setCount] = useState(0);

  // Define a function that increments the count
  const incrementCount = () => {
    setCount(count + 1); // Update the count state with the new value
  };

  // Define a function that decrements the count
  const decrementCount = () => {
    setCount(count - 1); // Update the count state with the new value
  };
  return (
    // <div>
    //   <h1>Counter App</h1>
    //   <p>Count: {count}</p>
    //   {/* Button to increment count */}
    //   <button onClick={incrementCount}>Increment</button>
    //   {/* Button to decrement count */}
    //   <button onClick={decrementCount}>Decrement</button>
    // </div>
    <Form/>
  );
}

export default App;
