import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import CarouselDetail from './CarouselDetail';
import Description from './Description';
import TripTitle from './TripTitle';
import BookingButton from './BookingButton';

import '../../assets/css/trip.css';

const Trip = ({ match }) => {
  const { id } = match.params;
  const [travel, setTravel] = useState({});
  const [pictures, setPictures] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [peopleNumber, setPeopleNumber] = useState();

  useEffect(() => {
    axios
      .get(`https://api-airbnb-node.herokuapp.com/api/travels/${id}`)
      .then((result) => result.data[0])
      .then((data) => setTravel(data));
    axios
      .get(`https://api-airbnb-node.herokuapp.com/api/travels/${id}/pictures`)
      .then((responses) => responses.data)
      .then((data) => setPictures(data));
  }, [id]);

  return (
    <div className="trip">
      {' '}
      <TripTitle travelTitle={travel.title} />
      <CarouselDetail pictures={pictures} />
      <Description
        travelDescription={travel.description}
        travelPrice={travel.price}
        travelCountry={travel.country}
        travelLevel={travel.level}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        peopleNumber={peopleNumber}
        setPeopleNumber={setPeopleNumber}
      />
      <BookingButton
        travelId={travel.id}
        startDate={startDate}
        endDate={endDate}
        peopleNumber={peopleNumber}
      />
    </div>
  );
};

Trip.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default Trip;
