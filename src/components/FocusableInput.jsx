import React, { useEffect, useRef } from 'react'

function FocusableInput () {

//! useRef se usa para crear una referencia que se asociará con el campo de entrada
const loadRef = useRef(null);

//! UseeEffect se usa para ejecutar el código que enfoca el campo de entrada una vez que el componente se ha montado
useEffect(() => {
    loadRef.current?.focus();
    
}, []);



 return (
    <div>
        <label for='textInput'>Username: </label>
        <input type='text' name='textInput' id='textInput' ref={loadRef}/>
    </div>
  )
}

//! 1 loadRef: Este es un objeto creado con useRef(). Las referencias (refs) son un mecanismo para acceder directamente a los nodos del DOM o a instancias de componentes en React.

//! 2 .current: La propiedad current del objeto ref (loadRef) contiene la referencia al elemento DOM que fue asignado a esa ref( ref={loadRef} ).

//! 3 .focus(): Este es un método del DOM que se utiliza para enfocar un elemento, como un campo de entrada (input), lo que significa que el cursor se colocará dentro de ese campo de entrada y estará listo para recibir la entrada del usuario.

 

export default FocusableInput