import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchBox } from './components/search-box/search-box';
import { CardList } from './components/card-list/card-list';
import './App.css';

function App() {
  const [monsters, setMonster] = useState([]);
  const [searchField, setSearchField] = useState(``);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios('http://jsonplaceholder.typicode.com/users');
      setMonster(response.data);
    };
    fetchData();
  }, []);

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className='App'>
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder='search monsters'
        handleChange={(e) => setSearchField(e.target.value)}
      />
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
}

export default App;
