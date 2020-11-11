import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BookingButton = ({ travelId, startDate, endDate, peopleNumber }) => {
  return (
    <Link
      to={{
        pathname: `/Booking/${travelId}`,
        state: { startDate, endDate, peopleNumber },
      }}
      className="colorButton"
    >
      Réserver
    </Link>
  );
};

BookingButton.propTypes = {
  travelId: PropTypes.number.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  peopleNumber: PropTypes.number.isRequired,
};

export default BookingButton;
