import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

import FilterBanner from './FilterBanner';
import ResultNumber from './ResultNumber';
import TripCard from './TripCard';

import '../../assets/css/global.css';
import '../../assets/css/Results/Results.css';

const Results = ({ match }) => {
  const { type, name } = match.params;
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    axios
      .get('https://api-airbnb-node.herokuapp.com/api/travels')
      .then((result) => result.data)
      .then((data) => handleType(data));
  }, []);

  const handleType = (data) => {
    if (name === 'era') {
      setTravels(data.filter((travel) => travel.era === type));
    }

    if (name === '1' || (name === '2') | (name === '3')) {
      setTravels(data.filter((travel) => travel.level === Number(name)));
    }
  };

  const handleSubfiltering = () => {
    console.log('subfiltered!');
  };

  return (
    <div className="results">
      <FilterBanner
        filterType={name}
        filterName={type}
        handleSubfiltering={handleSubfiltering}
      />
      <ResultNumber filterList={travels} />
      <div className="results-list">
        {travels &&
          travels.map((travel) => (
            <Link
              className="travel-card-link"
              to={{ pathname: `/Trip/${travel.id}` }}
            >
              <TripCard filteredTrips={travel} />
            </Link>
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
