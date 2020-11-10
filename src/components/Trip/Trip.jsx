import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../../assets/css/trip.css';
import CarouselDetail from './CarouselDetail';
import Description from './Description';
import TripTitle from './TripTitle';
import BookingButton from './BookingButton';

const Trip = ({ match }) => {
  const { id } = match.params;
  const [travel, setTravel] = useState({});
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api-airbnb-node.herokuapp.com/api/travels/${id}`)
      .then((result) => result.data[0])
      .then((data) => setTravel(data));

    /*(async () => {
      const picturesArr = await axios
        .get(`https://api-airbnb-node.herokuapp.com/api/travels/${id}/pictures`)
        .then((result) => result.data)
        .catch((err) => console.log(`${err}`));
      setPictures(picturesArr);
    })();*/
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
      />
      <BookingButton travelId={travel.id} />
    </div>
  );
};

Description.propTypes = {
  match: PropTypes.shape({}).isRequired,
};

export default Trip;
