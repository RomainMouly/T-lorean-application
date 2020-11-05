import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/global.css';
import '../../assets/css/Results/SensationMeter.css';
import mountain from '../../assets/images/mountain.png';
import flash from '../../assets/images/flash.png';
import compass from '../../assets/images/compass.png';

const SensationMeter = ({ filteredTripsLevel }) => {
  switch (filteredTripsLevel) {
    case 2:
      return (
        <div className="trip-sensation-meter">
          <img src={mountain} alt="mountain" />
          <img src={mountain} alt="mountain" />
        </div>
      );
    case 3:
      return (
        <div className="trip-sensation-meter">
          <img src={mountain} alt="mountain" />
          <img src={mountain} alt="mountain" />
          <img src={mountain} alt="mountain" />
        </div>
      );
    default:
      return (
        <div className="trip-sensation-meter">
          <img src={mountain} alt="mountain" />
        </div>
      );
  }
};

SensationMeter.propTypes = {
  data: PropTypes.shape.isRequired,
};

export default SensationMeter;
