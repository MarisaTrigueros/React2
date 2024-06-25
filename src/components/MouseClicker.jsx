import React from 'react'

//! ¿Por qué no me coge {name = 'One'} como prop? Sólo si lo especifico en button name={name}
function MouseClicker({ name = 'One' }) {
    
    const  imageUrl = 'https://s1.significados.com/foto/ave-fenix-og.jpg?class=ogImageSquare';

    const handleClick = (event) => {
        //! Si dejamos 'event.target.name' sólo veremos por consola imageUrl
        console.log(event.currentTarget.getAttribute('name'));
        console.log(imageUrl);
    }
  return (
    <>
    <button onClick={handleClick} name={name}>
        <img src={imageUrl} alt='Fénix' className='fenix'/>
    </button>
    </>
  )
}

export default MouseClicker;