import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Description from '../Trip/Description';
import Form from './Form';

const Booking = ({ match, location }) => {
  const { id } = match.params;
  const { startDate, endDate } = location.state;
  const [travel, setTravel] = useState({});

  console.log(startDate, endDate);

  useEffect(() => {
    axios
      .get(`https://api-airbnb-node.herokuapp.com/api/travels/${id}`)
      .then((result) => result.data[0])
      .then((data) => setTravel(data));
  }, [id]);

  return (
    <div className="Booking">
      <Form />
    </div>
  );
};

Description.propTypes = {
  match: PropTypes.shape({}).isRequired,
};

export default Booking;
