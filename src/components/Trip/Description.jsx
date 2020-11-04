import React from 'react';
import PropTypes from 'prop-types';
import TripCard from '../Results/TripCard';

const Description = (props) => {
  const { travelTitle, travelDescription } = props;
  return (
    <div>
      <div>{travelTitle}</div>
      <div>{travelDescription}</div>
      {/* {travel && <TripCard data={travel} indexTravel={id} />} */}
    </div>
  );
};

Description.propTypes = {
  travel: PropTypes.shape({}).isRequired,
};

export default Description;
