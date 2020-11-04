import React, { useState, useEffect } from 'react';
import Suggestions from './Suggestions';
import SearchButton from './SearchButton';
import { getTravels } from '../../interfaces/database/travel';

const SearchBar = ({ history }) => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [travelId, setTravelId] = useState(0);
  const [hasClicked, setHasClicked] = useState(false);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const suggestionInputChange = (travel) => {
    setSearch(travel.title);
    setTravelId(travel.id);
  };

  useEffect(() => {
    if (travelId && !hasClicked) {
      setHasClicked(true);
    } else if (travelId && hasClicked) {
      setHasClicked(false);
    }
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
          id="searchInput"
          onKeyPress={(event) => event.key === 'Enter' && history.push('/Trip')}
          placeholder="Entrez le titre du voyage"
          value={search}
          onChange={handleInputChange}
        />
        <SearchButton travelId={travelId} />
      </form>
      <div className="travelTitles">
        <Suggestions
          results={!hasClicked ? results : []}
          suggestionInputChange={suggestionInputChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
