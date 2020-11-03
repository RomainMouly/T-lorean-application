import React from 'react';
import { Link } from 'react-router-dom';

const SearchButton = ({ travelId }) => {
  return (
    <Link to={{ pathname: `/Trip/${travelId}` }} id="searchbarButton">
      OK
    </Link>
  );
};

export default SearchButton;
