import React, { useRef } from "react";

function Login() {

  //! Hook de referencia al formulario, se inicia en null hasta que se renderice
  const formRef = useRef("null");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formInfo = new FormData(event.target);

    for (let [key, value] of formInfo) {
      console.log(`${key}: ${value}`);
    }
  };

  const changeHandle = () => {
    const formInfo = new FormData(formRef.current);
    const enabledButton = formInfo.get("username") && formInfo.get("password") && formInfo.get("checkbox");
    document.getElementById("submitButton").disabled = !enabledButton;
  };

  return (
    <>
      <form onSubmit={handleSubmit} ref={formRef} onChange={changeHandle}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          placeholder="Insert your username"
          required={true}
        />
        <br></br>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          placeholder="Insert your username"
          required={true}
        />
        <br></br>
        <input type="checkbox" name="checkbox" required={true} />
        <br></br>
        <button type="submit" id="submitButton">Submit </button>
        <button type='reset'>Reset</button>
      </form>
    </>
  );
}

export default Login;
