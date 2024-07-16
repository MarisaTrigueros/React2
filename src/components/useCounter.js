import { useState } from "react";

function useCounter({ initialValue = 0 }) {
  const [count, setCount] = useState(Math.max(initialValue, 0));

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(Math.max(0, count - 1));
  const reset = () => setCount(Math.max(initialValue, 0));

  return { count, increment, decrement, reset };
}

export default useCounter;
