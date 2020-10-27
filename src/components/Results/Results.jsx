import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/global.css';

const Results = ({ location }) => {
  const filterOne = location.query.filter;
  return (
    <div>
      {Object.keys(filterOne).map((indexTravel) => (
        <div>
          <div>carrousel</div>
          <div>{filterOne[indexTravel].title}</div>
          <div>{filterOne[indexTravel].country}</div>
          <div>{filterOne[indexTravel].price}/pers</div>
          <div>la journée</div>
        </div>
      ))}
    </div>
  );
};
Results.propTypes = {
  location: PropTypes.shape({
    query: PropTypes.shape({ filter: PropTypes.shape({}) }).isRequired,
  }).isRequired,
};

export default Results;
