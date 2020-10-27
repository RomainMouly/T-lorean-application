import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ location }) => {
  const filterOne = location.query.filter;
  return (
    <div>
      {Object.keys(filterOne).map(
        (indexTravel) => filterOne[indexTravel].title
      )}
    </div>
  );
};
Results.propTypes = {
  location: PropTypes.shape({
    query: PropTypes.shape({ filter: PropTypes.shape({}) }).isRequired,
  }).isRequired,
};

export default Results;
