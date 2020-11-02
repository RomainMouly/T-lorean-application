import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/global.css';

const TripBanner = ({ photo, name }) => {
  return (
    <div>
      {photo}
      {name}
    </div>
  );
};

TripBanner.propTypes = {
  data: PropTypes.shape.isRequired,
};

export default TripBanner;
