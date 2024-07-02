import React, { useState } from "react";
import Welcome from "./Welcome";

function InteractiveWelcome() {
  const [inputValue, setInputValue] = useState("");

  const changeInputValue = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <label htmlFor="welcomeText">Enter your usename: </label>
      <br></br>
      <input
        type="text"
        id="welcomeText"
        value={inputValue}
        onChange={changeInputValue}
        placeholder="Insert your username"
      />
      <Welcome calcetin={inputValue} />
    </>
  );
};

//! Calcetin es una forma de hacerme ver que name no es una etiqueta predefinida
export default InteractiveWelcome;
