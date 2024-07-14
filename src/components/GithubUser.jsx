import React, { useEffect, useState } from 'react'

function GithubUser({ username }) {
    
    const [userData, setUserData] = useState (null) ;

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                } else {
                    throw new Error('Response error');
                  }
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
              };
          
              fetchData();
            }, [username]);
          
            if (!userData) {
              return <p></p>;
            }
          
            return (
              <div>
                <h2>{userData.name}</h2>
                <p>Login: {userData.login}</p>
                <img src={userData.avatar_url} style={{ width: 100, borderRadius: '50%' }} />
              </div>
            );
          };
          
          export default GithubUser;