import React, { useState } from "react";

function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false); //False: No está colapsado al inicio

  //! goCollapset: cambia el estado de colapso cuando se hace clic en el título.
  //! Cada vez que se llama a esta función, el valor de collapsed se alterna entre true y false.
  const goCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: 'white',
          border: "4px red solid",
          padding: '40px',
          fontFamily: 'Franklin Gothic Medium',
          cursor: 'pointer',
          borderRadius: '40px'
        }}
      >
        <div onClick={goCollapsed}  style={{
            border: '2px solid black',
            borderRadius: '40px',
            padding: '10px',
            backgroundColor: 'rgb(255, 255, 0, 0.5)',
        }}> 
            {title}
        </div>
        {!collapsed && <div>{children}</div>}
        {/* Renderizado condicional de children: Se utiliza el operador lógico && para renderizar los children solo si collapsed es false. Si collapsed es true, los children no se renderizan, es decir, se ocultan. */}
      </div>
    </>
  );
}

export default Container;
