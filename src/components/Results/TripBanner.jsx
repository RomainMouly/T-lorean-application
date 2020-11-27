import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/global.css';
import '../../assets/css/Results/TripBanner.css';

import { getPictures } from '../../interfaces/database/pictures';

const TripBanner = ({ tripId, altName }) => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    getPictures(tripId)
      .then((response) => response.data[0].url)
      .then((data) => setPictures(data))
      .catch((err) => console.log(`${err}`));
  }, [tripId]);

  return <img src={pictures} alt={altName} />;
};

TripBanner.propTypes = {
  tripId: PropTypes.shape.isRequired,
  altName: PropTypes.shape.isRequired,
};

export default TripBanner;
