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
  const [subfilter, setSubfilter] = useState(false);
  const [subfilterName, setFilterName] = useState(null);
  const [isFilter, setIsFilter] = useState(false);
  const [filter, setFilter] = useState([]);

  const handleType = (data) => {
    if (name === 'era') {
      setTravels(data.filter((travel) => travel.era === type));
    }

    if (name === '1' || name === '2' || name === '3') {
      setTravels(data.filter((travel) => travel.level === Number(name)));
    }
  };

  const handleTravels = () => {
    axios
      .get('https://api-airbnb-node.herokuapp.com/api/travels')
      .then((result) => result.data)
      .then((data) => handleType(data));
  };

  useEffect(() => {
    handleTravels();
  }, []);

  const handleSubfilterByEra = (numberSubFilter) => {
    setIsFilter(true);
    setFilter(travels.filter((travel) => travel.era === numberSubFilter));
  };

  const handleSubfilterByLevel = (numberSubFilter) => {
    setIsFilter(true);

    setFilter(travels.filter((travel) => travel.level === numberSubFilter));
  };

  return (
    <div className="results">
      <FilterBanner
        filterType={name}
        filterName={type}
        handleSubfilterByEra={handleSubfilterByEra}
        handleSubfilterByLevel={handleSubfilterByLevel}
        // subfilterOne={subfilterOne}
        // subfilterTwo={subfilterTwo}
        // subfilterThree={subfilterThree}
        // subfilterFour={subfilterFour}
        // subfilterFive={subfilterFive}
        // subfilterSix={subfilterSix}
      />
      <ResultNumber filterList={travels} />
      <div className="results-list">
        {!isFilter &&
          travels &&
          travels.map((travel) => (
            <Link
              className="travel-card-link"
              to={{ pathname: `/Trip/${travel.id}` }}
            >
              <TripCard filteredTrips={travel} />
            </Link>
          ))}
        {isFilter &&
          filter &&
          filter.map((travel) => (
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
