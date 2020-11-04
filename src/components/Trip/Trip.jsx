import React from 'react';
import Description from './Description';
import '../../assets/css/trip.css';
import BookingButton from './BookingButton';
import Calendar from '../Booking/Calendar';

const Trip = ({ description, match }) => {
  return (
    <div className="trip">
      {' '}
      Welcome tu es dans le trip !
      <Description description={description} match={match} />
      <BookingButton />
      <Calendar />
    </div>
  );
};

export default Trip;
