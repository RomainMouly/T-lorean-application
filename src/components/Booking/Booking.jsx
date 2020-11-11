import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import Form from './Form';

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
    <div className="Booking">
      <h2>{travel.title}</h2>
      <h3>
        Vous serez {peopleNumber} personnes à voyager du{' '}
        {format(startDate, 'dd MMMM yyyy', { locale: fr })} au{' '}
        {format(endDate, 'dd MMMM yyyy', { locale: fr })}
      </h3>

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
