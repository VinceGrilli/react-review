import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [monsters, setMonster] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios('http://jsonplaceholder.typicode.com/users');
      setMonster(response.data);
    };
    fetchData();
  }, []);
  console.log(monsters);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div>
          {monsters.map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
