

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function GithubUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://api.github.com/users');
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          throw new Error('Error fetching users');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Github Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GithubUserList;
