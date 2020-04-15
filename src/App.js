import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [monsters, setMonster] = useState([
    {
      name: 'Frankenstein',
      id: '20394',
    },
    {
      name: 'Dracula',
      id: '02dd4',
    },
    {
      name: 'Zombie',
      id: '34234',
    },
  ]);

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
