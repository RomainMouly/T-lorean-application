import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/global.css';
import '../../assets/css/Results/SensationMeter.css';
import fire from '../../assets/images/fire.png';

const SensationMeter = ({ filteredTripsLevel }) => {
  switch (filteredTripsLevel) {
    case 2:
      return (
        <div className="trip-sensation-meter">
          <img src={fire} alt="fire" />
          <img src={fire} alt="fire" />
        </div>
      );
    case 3:
      return (
        <div className="trip-sensation-meter">
          <img src={fire} alt="fire" />
          <img src={fire} alt="fire" />
          <img src={fire} alt="fire" />
        </div>
      );
    default:
      return (
        <div className="trip-sensation-meter">
          <img src={fire} alt="fire" />
        </div>
      );
  }
};

SensationMeter.propTypes = {
  data: PropTypes.shape.isRequired,
};

export default SensationMeter;
