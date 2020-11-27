import React from 'react';
import { Link } from 'react-router-dom';

const SearchButton = ({ travelId }) => {
  return (
    <Link
      to={{ pathname: `/Trip/${travelId}` }}
      className="colorButton"
      id="go"
    >
      GO&nbsp;!
    </Link>
  );
};

export default SearchButton;
