import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  return (
    <form>
      <input
        type="text"
        placeholder="Search for..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>{query}</p>
    </form>
  );
};

export default SearchBar;
