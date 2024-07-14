import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ initialValue = 0, click = 1 }) {

  // Declarar el estado del contador, inicializado con initialValue (valor en prop)
  const [count, setCount] = useState(initialValue);

  // Función para incrementar el contador
  const increment = () => {
    setCount(prevCount => prevCount + click);
  };

   // Función para decrementar el contador
   const decrement = () => {
    setCount(prevCount => Math.max(prevCount - click, 0));
  };

  const reset = () => {
    setCount(initialValue);
  }

  return (
    <>
      <CounterDisplay count={count}/>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Reiniciar</button>
    </>
  );
}

export default Counter;