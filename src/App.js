import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Header from './components/characters/Header';
import './App.css';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/UI/Search';


function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        'https://www.breakingbadapi.com/api/characters'
      )

      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems()
  }, [query])
  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid items={items} isLoading={isLoading}/>
    </div>
  );
}

export default App;
