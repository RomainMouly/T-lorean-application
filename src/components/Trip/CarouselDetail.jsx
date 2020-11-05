import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
/*import SensationMeter from '../Results/SensationMeter';*/

const CarouselDetail = ({ filteredTrips, indexTravel }) => {
  return (
    <div className="carousel-box">
      {/*<SensationMeter filteredTripsLevel={filteredTrips[indexTravel].level} />*/}
    </div>
  );
};

CarouselDetail.propTypes = {
  image: PropTypes.string.isRequired,
};

export default CarouselDetail;
