import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/global.css';
import '../../assets/css/Results/SensationMeter.css';
import fire from '../../assets/images/fire.png';

const SensationMeter = ({ data }) => {
  switch (data) {
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

    // if (data === 1) {
    //   return (
    //     <div className="trip-sensation-meter">
    //       <img src={fire} alt="fire" />
    //     </div>
    //   );
    // } else if (data === 2) {
    //   return (
    //     <div className="trip-sensation-meter">
    //       <img src={fire} alt="fire" />
    //       <img src={fire} alt="fire" />
    //     </div>
    //   );
    // }
    // return (
    //   <div className="trip-sensation-meter">
    //     <img src={fire} alt="fire" />
    //     <img src={fire} alt="fire" />
    //     <img src={fire} alt="fire" />
    //   </div>
    // );
  }
};

SensationMeter.propTypes = {
  data: PropTypes.shape.isRequired,
};

export default SensationMeter;
