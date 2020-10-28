import React from 'react';
import ReactSearchBox from 'react-search-box';

const data = [
  {
    key: 'spart',
    value: 'spartaaa',
  },
  {
    key: 'futur',
    value: 'turfu',
  },
  {
    key: 'gaulle',
    value: 'gaulois',
  },
  {
    key: 'romain',
    value: 'romain',
  },
  {
    key: 'prehistoire',
    value: 'dinosaure',
  },
];

const SearchBar = () => {
  return (
    <div className="searchBar">
      <ReactSearchBox
        placeholder="choisissez votre expérience !"
        value=""
        data={data}
      />
    </div>
  );
};

export default SearchBar;
