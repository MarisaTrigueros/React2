import React, { useEffect, useRef } from 'react'


function StrictModeUsed() {
    const firstTimeMounted = useRef(false);

    useEffect(() => {
        if (!firstTimeMounted.current) {
          firstTimeMounted.current = true;
            console.log('Encantada de conocerte! Espero que disfrutes la aplicación');
            
        }
    }, []);

  return (

    <div>
        <p>¿Es la primera vez que nos vemos?</p>
    </div>
  )
}

export default StrictModeUsed;