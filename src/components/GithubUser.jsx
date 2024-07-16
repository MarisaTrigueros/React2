import React from "react";
import useGithubUser from "./useGithubUser";

function GithubUser({ username }) {

  const { user, isLoading, isError, refetch } = useGithubUser(username);

  if (isError) return (<div>Failed to load</div>);
  if (isLoading) return (<div>Loading...</div>);

  return (
    <>
      <div>
        <h2>{user.name}</h2>
        <p>Login: {user.login}</p>
        <img src={user.avatar_url} style={{width: 100, borderRadius: '50%' }} alt='User Avatar' />
        <br></br>
        <button onClick={refetch}>Recuperar datos</button>
      </div>
      </>
    );
}

export default GithubUser;
