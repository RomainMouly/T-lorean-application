import React from 'react';
<<<<<<< HEAD

const BookingButton = () => {
  return <button id="searchbarButton">Réserver</button>;
=======
import { Link } from 'react-router-dom';

const BookingButton = ({ travelId }) => {
  return (
    <Link to={{ pathname: `/Booking/${travelId}` }} className="colorButton">
      Reserver
    </Link>
  );
>>>>>>> 5af416b43c71109a67c1ce69702e347b55b7b236
};

export default BookingButton;
