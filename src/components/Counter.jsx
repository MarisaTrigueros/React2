import React, { useEffect, useRef, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef(0);

    const increment = () => setCount(prevCount => Math.max(prevCount + 1, 0));
    const decrement = () => setCount(prevCount => Math.max(prevCount - 1, 0));
    const reset = () => setCount(0);

    //! Current: valor actual al que apunta la referencia. Cuando accedes a prevCountRef.current, estás obteniendo el valor actual almacenado en esa referencia.
    useEffect(() => {
        if (count > prevCountRef.current) {
          console.log('up');
        } else if (count < prevCountRef.current) {
          console.log('down');
        }
        prevCountRef.current = count;
      }, [count]); 

  return (
    <>
    <div>
        <p>Counter:</p>
        <p>{count}</p>
        <button onClick={increment} >+</button>
        <button onClick={decrement} >-</button>
        <button onClick={reset} >Clear</button>
    </div>
    </>
  )
}

export default Counter


//! 1. Render inicial:

// count es 0.
// prevCountRef.current es 0 (valor inicial).

//! 2. Incrementar el contador:

// El usuario hace clic en el botón +.
// count cambia a 1.
// useEffect se ejecuta debido al cambio en count.
// Dentro de useEffect:
// count (1) se compara con prevCountRef.current (0).
// Como count > prevCountRef.current, se imprime up.
// prevCountRef.current se actualiza a 1.

//! 3. Incrementar el contador nuevamente:

// El usuario hace clic en el botón + otra vez.
// count cambia a 2.
// useEffect se ejecuta nuevamente.
// Dentro de useEffect:
// count (2) se compara con prevCountRef.current (1).
// Como count > prevCountRef.current, se imprime up.
// prevCountRef.current se actualiza a 2.

//! useRef: useRef es un hook de React que se utiliza para mantener una referencia mutable que persiste durante todo el ciclo de vida del componente sin causar una nueva renderización cuando se actualiza. A diferencia de useState, actualizar una referencia (ref) no provoca una re-renderización del componente.