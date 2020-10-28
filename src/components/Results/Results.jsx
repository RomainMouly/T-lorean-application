import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/global.css';
import '../../assets/css/Results/Results.css';
import ResultNumber from './ResultNumber';
import TripCard from './TripCard';

const Results = ({ location }) => {
  const filterOne = location.query.filter;
  return (
    <div className="results">
      <ResultNumber data={filterOne} />
      <div className="results-list">
        {Object.keys(filterOne).map((indexTravel) => (
          <TripCard data={filterOne} indexTravel={indexTravel} />
        ))}
      </div>
    </div>
  );
};
Results.propTypes = {
  location: PropTypes.shape({
    query: PropTypes.shape({ filter: PropTypes.shape({}) }).isRequired,
  }).isRequired,
};

export default Results;
