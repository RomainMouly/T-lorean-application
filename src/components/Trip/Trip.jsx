import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../../assets/css/trip.css';
import CarouselDetail from './CarouselDetail';
import Description from './Description';
import BookingButton from './BookingButton';
import Calendar from '../Booking/Calendar';

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
<<<<<<< HEAD
      Welcome tu es dans le trip !
      <Description description={description} match={match} />
      <BookingButton />
      <Calendar />
=======
      <CarouselDetail />
      <Description
        travelTitle={travel.title}
        travelDescription={travel.description}
        travelPrice={travel.price}
        travelCountry={travel.country}
      />
      <BookingButton travelId={travel.id} />
>>>>>>> 6c5f14f7e8d97bf3e6e6c78a1f28892ffeacb8dd
    </div>
  );
};

Description.propTypes = {
  match: PropTypes.shape({}).isRequired,
};

export default Trip;
