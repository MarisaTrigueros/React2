import React from 'react';
import "./App.css";
import Login from "./components/Login";
import useCounter from "./components/useCounter";
import GithubUser from "./components/GithubUser";
import GithubUsers from './components/GithubUsers';

function App() {
  const { count, increment, decrement, reset } = useCounter({ initialValue: 0 });

 
  return (
    <>
      <div>
        <p>Contador: {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
      <Login/>
      <GithubUser username="MarisaTrigueros" />
      <GithubUsers />
      


    </>
  );
}

export default App;
