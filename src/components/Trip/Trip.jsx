import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Description from './Description';
import BookingButton from './BookingButton';

const Trip = ({ match }) => {
  const { id } = match.params;
  const [travel, setTravel] = useState({});
  console.log(process.env.REACT_APP_BACK);

  useEffect(() => {
    axios
      .get(`https://api-airbnb-node.herokuapp.com/api/travels/${id}`)
      .then((result) => result.data[0])
      .then((data) => setTravel(data));
  }, [id]);
  console.log(travel);
  return (
    <div className="trip">
      {' '}
      Welcome tu es dans le trip !
      <Description description={Description} match={match} />
      <BookingButton travelId={travel.id} />
    </div>
  );
};

Description.propTypes = {
  match: PropTypes.shape({}).isRequired,
};

export default Trip;
