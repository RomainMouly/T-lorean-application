import React from 'react';
import Description from './Description';
import '../../assets/css/trip.css';
import BookingButton from './BookingButton';

const Trip = ({ description, match }) => {
  return (
    <div className="trip">
      {' '}
      Welcome tu es dans le trip !
      <Description description={description} match={match} />
      <BookingButton />
    </div>
  );
};

export default Trip;
