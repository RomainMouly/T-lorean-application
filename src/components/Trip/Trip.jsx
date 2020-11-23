import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import PeopleNumberContext from '../../contexts/PeopleNumberContext';
import StartDateContext from '../../contexts/StartDateContext';
import EndDateContext from '../../contexts/EndDateContext';
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

  const contextPeopleValue = {
    peopleNumber,
    updatePeopleNumber: setPeopleNumber,
  };
  const contextStartDateValue = {
    startDate,
    updateStartDate: setStartDate,
  };

  const contextEndDateValue = {
    endDate,
    updateEndDate: setEndDate,
  };

  return (
    <div className="trip">
      {' '}
      <TripTitle travelTitle={travel.title} />
      <CarouselDetail pictures={pictures} />
      <PeopleNumberContext.Provider value={contextPeopleValue}>
        <StartDateContext.Provider value={contextStartDateValue}>
          <EndDateContext.Provider value={contextEndDateValue}>
            <Description
              travelDescription={travel.description}
              travelPrice={travel.price}
              travelCountry={travel.country}
              travelLevel={travel.level}
            />
            <BookingButton travelId={travel.id} />
          </EndDateContext.Provider>
        </StartDateContext.Provider>
      </PeopleNumberContext.Provider>
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
