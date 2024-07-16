import React, { useState } from "react";
import GithubUser from "./GithubUser";

function GithubUsers() {
  const [username, setUsername] = useState("");
  const [userList, setUserList] = useState([]);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username) {
      setUserList([...userList, username]);
      setUsername("");
    }
  };

  return (
    <>
      <form className="searchPack" onSubmit={handleSubmit}>
        <label htmlFor="textInput">Search:</label>
        <input
          type="text"
          onChange={handleInputChange}
          value={username}
          id="textInput"
          placeholder="Enter a username"
        />
        <button type="submit" className="submit">
          &#128269;
        </button>
      </form>

      <ul>
        {userList.map((user, index) => (
          <li key={index}>
            <GithubUser username={user} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default GithubUsers;
