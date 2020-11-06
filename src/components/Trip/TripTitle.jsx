import React from 'react';

const TripTitle = ({ travelTitle }) => {
  return (
    <div className="tripTitle">
      <div className="underline" />
      <h2>{travelTitle}</h2>
      <div className="underline" />
    </div>
  );
};

export default TripTitle;
