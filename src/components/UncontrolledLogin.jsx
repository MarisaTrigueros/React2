import React from "react";

function UncontrolledLogin() {
  const handleLogin = (event) => {
    event.preventDefault();

    //! Accediendo a los valores directamente desde las referencias al DOM
    //! username, password y checkbox del event.target deben ser los id
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const checkbox = event.target.elements.checkbox.checked;

    console.log(`
        Username: ${username}
        Password: ${password}
        Checkbox: ${checkbox ? true : false}
    `);
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" defaultValue={""} required />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" defaultValue={""} required />
        <br />
        <input
          type="checkbox"
          id="checkbox"
          defaultChecked={false}
          required
        ></input>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default UncontrolledLogin;
