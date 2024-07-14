import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome";
import Counter from './components/Counter';
import GithubUsers from './components/GithubUsers';


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Welcome name={"Marisa"} />} />
          <Route path='/counter' element={<Counter initialValue={0} click={1} />} />
          <Route path='users/:username' element={< GithubUsers/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
