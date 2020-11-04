import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import TripCard from '../Results/TripCard';

const Description = ({ match }) => {
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
    <div className="trip-texts">
      <h2>{travel.title}</h2>
      <div className="description">{travel.description}</div>
      <div className="calendar">Ceci est un calendrier en devenir.</div>
      {/*<div>{travel.price}</div>*/}
    </div>
  );
};

Description.propTypes = {
  match: PropTypes.shape({}).isRequired,
};

export default Description;
