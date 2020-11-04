import React from 'react';
import FilterTravel from '../componentsGlobal/FilterTravel';
import Description from '../Trip/Description';

const Booking = ({ match, description }) => {
  return (
    <div className="trip">
      {' '}
      Welcome tu es dans le Booking maintenant! !
      <Description match={match} />
    </div>
  );
};

export default Booking;
