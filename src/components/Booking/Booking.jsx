import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Form from './Form';
import RecapPage from './RecapPage';

const Booking = ({ match, location }) => {
  const { id } = match.params;
  const { startDate, endDate, peopleNumber } = location.state;
  const [travel, setTravel] = useState({});

  useEffect(() => {
    axios
      .get(`https://api-airbnb-node.herokuapp.com/api/travels/${id}`)
      .then((result) => result.data[0])
      .then((data) => setTravel(data));
  }, [id]);

  return (
    <div className="bookingTitle">
      <div className="underline" />
      <h2>Confirmation et paiement</h2>
      <div className="underline" />
      <RecapPage
        startDate={startDate}
        endDate={endDate}
        travel={travel}
        peopleNumber={peopleNumber}
      />
      <Form />
    </div>
  );
};

Booking.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      peopleNumber: PropTypes.number.isRequired,
    }),
  }).isRequired,
  travel: PropTypes.shape({}).isRequired,
};

export default Booking;
