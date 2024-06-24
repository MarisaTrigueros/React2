import React, { useEffect, useState } from 'react'
import moment from 'moment';

function Clock() {

    const [currentTime, setCurrentTime] = useState(moment().format('HH:mm:ss'));
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(moment().format('HH:mm:ss'));
        }, 1000);

        // Evitar fugas de memoria, si no lo usamos se seguirá ejecutando 
        // en segundo plano aunque el componente que lo creó ya no esté en el DOM
        // Si no lo ponemos funciona igual, pero consumimos recursos innecesarios
        return  () => clearInterval(timer);
    })

  return (
    <div>{currentTime} </div>
  )
}

export default Clock