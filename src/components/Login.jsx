import React from "react";
import useTrackState from "./useTrackState";

function Login() {
  const username = useTrackState('');
  const password = useTrackState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username.value);
    console.log("Password:", password.value);

    username.reset();
    password.reset();
  };


return (
  <form onSubmit={handleSubmit} className="formOnSubmit">
    <label htmlFor="username">Username:</label>
    <input
      type="text"
      {...username}
      id="username"
      placeholder="Enter username"
    />
    <label htmlFor="password">Password: </label>
    <input type="password" {...password} id="password" />
    <button type="submit">Enter</button>
  </form>
);
}

export default Login;
