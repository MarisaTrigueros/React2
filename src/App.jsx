
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import GithubUserList from './components/GithubUserList';
import NotFound from './components/NotFound';
import GithubUsers from './components/GithubUsers';

function App() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/users">Github Users</Link>
          </li>
        </ul>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Welcome name="Marisa" />} />
          <Route path="/counter" element={<Counter initialValue={0} click={1} />} />
          <Route path="/users" element={<GithubUserList />} />
          <Route path="/users/:username" element={<GithubUsers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
