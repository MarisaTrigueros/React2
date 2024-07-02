import React from "react";

function Login() {

    const getFormInfo= (event) => {
        event.preventDefault();
        const formInfo = new FormData(event.target);

        for (let [key, value] of formInfo.entries()) {
            console.log(`${key}: ${value}`);
          }
    } 


  return (
    <>
      <form onSubmit={getFormInfo}>
        <label >Username:</label>
        <input
          type="text"
          id="username"
          name='user'
          placeholder="Insert your username"
        />
        <br></br>
        <label>Password:</label>
        <input type="password" id="myPassword" name='password'></input>
        <br></br>
        <label>Remember me!</label>
        <input type="checkbox" name='checkbox' required />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
