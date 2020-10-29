import React, { useState } from 'react';
import axios from 'axios';
import Suggestions from './Suggestions';

const API_URL = 'https://api-airbnb-node.herokuapp.com/api/travels';

const SearchBar = ({ history }) => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
    axios
      .get(`${API_URL}`)
      .then((response) =>
        setResults(
          response.data.filter((travel) =>
            travel.title.toLowerCase().includes(search.toLowerCase())
          )
        )
      );
  };

  return (
    <form>
      <input
        onKeyPress={(event) => event.key === 'Enter' && history.push('/Trip')}
        placeholder="Search for..."
        value={search}
        onChange={handleInputChange}
      />
      <Suggestions results={results} />
    </form>
  );
};

export default SearchBar;
