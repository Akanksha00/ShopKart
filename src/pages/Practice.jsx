import React from "react";
import { useState } from "react";
export default function Practice() {
  //const [count, setCount] = useState(0);  // useState Hook
  let count = 0;
  function incrementCount() {
    count++;
    console.log(count);
  }
  return (
    <>
    <h2>Count: {count}</h2>
    {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
    <button onClick={incrementCount}>Increment</button>
    </>
  );
}