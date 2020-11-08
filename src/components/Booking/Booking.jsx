import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Description from '../Trip/Description';

const Booking = ({ match }) => {
  const { id } = match.params;
  const [travel, setTravel] = useState({});

  useEffect(() => {
    axios
      .get(`https://api-airbnb-node.herokuapp.com/api/travels/${id}`)
      .then((result) => result.data[0])
      .then((data) => setTravel(data));
  }, [id]);

  return (
    <div className="Booking">
      {' '}
      <h1>Welcome tu es dans le Booking !</h1>{' '}
      <Description
        travelTitle={travel.title}
        travelDescription={travel.description}
      />
    </div>
  );
};

Description.propTypes = {
  match: PropTypes.shape({}).isRequired,
};

export default Booking;
