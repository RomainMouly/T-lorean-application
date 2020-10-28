import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios
      .get('https://api-airbnb-node.herokuapp.com/api/travels')
      .then((response) => setQuery(response.data.title));
  }, []);

  return (
    <form>
      <input
        type="text"
        placeholder="Entrer le nom de l'expérience"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>{query}</p>
    </form>
  );
};

export default SearchBar;
