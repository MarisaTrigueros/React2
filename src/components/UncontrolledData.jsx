import React from "react";

function UncontrolledData() {

  const handleLogin = (event) => {
    event.preventDefault();

    const formInfo = new FormData(event.target); 
    const username= formInfo.get("username");
    const password= formInfo.get('password')
    const checkbox= formInfo.get('checkbox');

    console.log(`
        Username: ${username}
        Password: ${password}
        Checkbox: ${checkbox ? true : false}
    `);

    event.target.reset();
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username"  name="username" defaultValue={""} required />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" defaultValue={""} required />
        <br />
        <input
          type="checkbox"
          id="checkbox"
          name="checkbox"
          defaultChecked={false}
          required
        ></input>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default UncontrolledData;
