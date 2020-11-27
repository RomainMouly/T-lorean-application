import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/global.css';
import '../../assets/css/Results/SensationMeter.css';
import flash from '../../assets/images/flash.png';

const SensationMeter = ({ filteredTripsLevel }) => {
  switch (filteredTripsLevel) {
    case 2:
      return (
        <div className="trip-sensation-meter">
          <img src={flash} alt="flash" />
          <img src={flash} alt="flash" />
        </div>
      );
    case 3:
      return (
        <div className="trip-sensation-meter">
          <img src={flash} alt="flash" />
          <img src={flash} alt="flash" />
          <img src={flash} alt="flash" />
        </div>
      );
    default:
      return (
        <div className="trip-sensation-meter">
          <img src={flash} alt="flash" />
        </div>
      );
  }
};

SensationMeter.propTypes = {
  data: PropTypes.shape.isRequired,
};

export default SensationMeter;
