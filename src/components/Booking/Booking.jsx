import React from 'react';
import Description from '../Trip/Description';

const Booking = ({ description, match }) => {
  return (
    <div className="trip">
      {' '}
      Welcome tu es dans le Booking maintenant! !
      <Description description={description} match={match} />
    </div>
  );
};

export default Booking;
