import React from "react";

function Color({ color }) {

  return (
    <>
      <li>
        Id: {color.id} 
        {'. '}
        Name: {color.name}
      </li>
    </>
  );
}

export default Color;
