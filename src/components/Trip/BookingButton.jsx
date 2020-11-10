import React from 'react';
import { Link } from 'react-router-dom';

const BookingButton = ({ travelId, startDate, endDate }) => {
  return (
    <Link
      to={{ pathname: `/Booking/${travelId}`, state: { startDate, endDate } }}
      className="colorButton"
    >
      Réserver
    </Link>
  );
};

export default BookingButton;
