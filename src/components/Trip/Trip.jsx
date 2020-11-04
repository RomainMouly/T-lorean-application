import React from 'react';
import CarouselDetail from './CarouselDetail';
import Description from './Description';
import BookingButton from './BookingButton';
import '../../assets/css/trip.css';

const Trip = ({ description, match }) => {
  return (
    <div className="trip">
      {' '}
      <CarouselDetail />
      <Description description={description} match={match} />
      <BookingButton />
    </div>
  );
};

export default Trip;
