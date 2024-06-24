import React, { useState } from 'react'

// ¿Por qué no me coge {name = 'One'} como prop? Sólo si lo especifico en button
function MouseClicker({name = 'One'}) {

    const [counter, setCounter] = useState(0);

    const handleClick = (event) => {
        console.log(event.target.name);
        setCounter(counter + 1)
    }
  return (
    <>
    <button onClick={handleClick} name={name}>{counter} </button>
    </>
  )
}

export default MouseClicker;