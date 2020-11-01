import React, { useState, useEffect } from 'react';
import Suggestions from './Suggestions';
import { getTravels } from '../../interfaces/database/travel';

const SearchBar = ({ history }) => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (search.length > 1) {
      getTravels().then((response) => {
        setResults(
          response.data.filter((travel) =>
            travel.title.toLowerCase().includes(search.toLocaleLowerCase())
          )
        );
      });
    } else {
      setResults([]);
    }
  }, [search]);

  return (
    <div className="searchBar">
      <form>
        <input
          onKeyPress={(event) => event.key === 'Enter' && history.push('/Trip')}
          placeholder="Search for..."
          value={search}
          onChange={handleInputChange}
        />
        <Suggestions results={results} />
      </form>
    </div>
  );
};

export default SearchBar;
