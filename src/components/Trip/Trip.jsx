import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../../assets/css/trip.css';
import CarouselDetail from './CarouselDetail';
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
  return (
    <div className="trip">
      {' '}
      <CarouselDetail />
      <Description
        travelTitle={travel.title}
        travelDescription={travel.description}
        travelPrice={travel.price}
        travelCountry={travel.country}
      />
      <BookingButton travelId={travel.id} />
    </div>
  );
};

Description.propTypes = {
  match: PropTypes.shape({}).isRequired,
};

export default Trip;
