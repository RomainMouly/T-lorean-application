import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BookingButton = ({ travelId, startDate, endDate, peopleNumber }) => {
  const [alertCalendar, setAlertCalendar] = useState('');

  const alertDates = () => {
    setAlertCalendar(
      'Veuillez saisir des dates valides et le nombre de voyageurs'
    );
  };

  return startDate && endDate && peopleNumber ? (
    <Link
      to={{
        pathname: `/Booking/${travelId}`,
        state: { startDate, endDate, peopleNumber },
      }}
      className="colorButton"
    >
      Réserver
    </Link>
  ) : (
    <div>
      <button className="colorButton" type="button" onClick={alertDates}>
        {' '}
        Réserver
      </button>
      <div className="alertDates">{alertCalendar}</div>
    </div>
  );
};

BookingButton.propTypes = {
  travelId: PropTypes.number.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  peopleNumber: PropTypes.number.isRequired,
};

export default BookingButton;
