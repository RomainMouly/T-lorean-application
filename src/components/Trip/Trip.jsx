import React from 'react';
import Description from './Description';
import '../../assets/css/trip.css';

const Trip = ({ description, match }) => {
  return (
    <div className="trip">
      {' '}
      Welcome tu es dans le trip !
      <Description description={description} match={match} />
    </div>
  );
};

export default Trip;
