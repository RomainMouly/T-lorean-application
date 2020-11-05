import React from 'react';
import { Link } from 'react-router-dom';

const BookingButton = ({ travelId }) => {
  return (
    <Link to={{ pathname: `/Booking/${travelId}` }} className="colorButton">
      Réserver
    </Link>
  );
};

export default BookingButton;
