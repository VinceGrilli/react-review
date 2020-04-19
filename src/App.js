import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

  return (
    <div className='App'>
      <input
        type='search'
        placeholder='Search Monster'
        onChange={(e) => setSearchField(e.target.value)}
      />
      <CardList monsters={monsters}></CardList>
    </div>
  );
}

export default App;
