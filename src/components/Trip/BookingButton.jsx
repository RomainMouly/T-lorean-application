import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import PeopleNumberContext from '../../contexts/PeopleNumberContext';
import StartDateContext from '../../contexts/StartDateContext';
import EndDateContext from '../../contexts/EndDateContext';

import '../../assets/css/BookingButton.css';

const BookingButton = ({ travelId }) => {
  const [alertCalendar, setAlertCalendar] = useState('');

  const alertDates = () => {
    setAlertCalendar(
      'Veuillez saisir des dates valides et le nombre de voyageurs'
    );
  };

  const { peopleNumber } = useContext(PeopleNumberContext);
  const { startDate } = useContext(StartDateContext);
  const { endDate } = useContext(EndDateContext);

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
};

export default BookingButton;
