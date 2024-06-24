import React, { useState, useEffect } from "react";

function Counter({ initialValue = 0, click = 1 }) {

  // Declarar el estado del contador, inicializado con initialValue (valor en prop)
  const [count, setCount] = useState(initialValue);

  // Función para incrementar el contador
  const increment = () => {
    setCount((initialValue) => initialValue + click);
  };

  useEffect(() => {
    console.log(`Número de clicks: ${count}`);
  });

  return (
    <>
      <button onClick={increment}>Incrementar</button>
      <h2>{count}</h2>
    </>
  );
}

export default Counter;