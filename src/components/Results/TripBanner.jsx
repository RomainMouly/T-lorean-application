import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/global.css';
import { getPictures } from '../../interfaces/database/pictures';

const TripBanner = ({ tripId, altName }) => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    getPictures(tripId)
      .then((response) => response.data)
      .then((data) => setPictures(data));
  }, [tripId]);
  console.log(pictures);
  return <div>{altName}</div>;
};

TripBanner.propTypes = {
  tripId: PropTypes.shape.isRequired,
  altName: PropTypes.shape.isRequired,
};

export default TripBanner;
