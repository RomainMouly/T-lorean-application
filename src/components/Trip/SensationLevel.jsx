import React from 'react';
import '../../assets/css/global.css';
import flash from '../../assets/images/flash.png';

const SensationLevel = () => {
  switch ('') {
    case 2:
      return (
        <div className="">
          <img src={flash} alt="flash" />
          <img src={flash} alt="flash" />
        </div>
      );
    case 3:
      return (
        <div className="">
          <img src={flash} alt="flash" />
          <img src={flash} alt="flash" />
          <img src={flash} alt="flash" />
        </div>
      );
    default:
      return (
        <div className="">
          <img src={flash} alt="flash" />
        </div>
      );
  }
};

export default SensationLevel;
