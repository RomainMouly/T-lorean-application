import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/global.css';
import '../../assets/css/Results/TripCard.css';
import pin from '../../assets/images/location-pin.png';
import SensationMeter from './SensationMeter';
import TripBanner from './TripBanner';

const TripCard = ({ filteredTrips, indexTravel }) => {
  return (
    <div className="trip-container">
      <div className="trip-card-carrousel">
        <TripBanner
          tripId={filteredTrips[indexTravel].id}
          altName={filteredTrips[indexTravel].title}
        />
        <SensationMeter filteredTripsLevel={filteredTrips[indexTravel].level} />
      </div>
      <div className="trip-caption">
        <div className="trip-info">
          <div>{filteredTrips[indexTravel].title}</div>
          <div className="trip-info-country">
            <img className="pin" src={pin} alt="pin" />
            {filteredTrips[indexTravel].country}
          </div>
        </div>
        <div className="trip-price">
          <div>{filteredTrips[indexTravel].price}€/pers</div>
          <div>la journée</div>
        </div>
      </div>
    </div>
  );
};

TripCard.propTypes = {
  filteredTrips: PropTypes.shape.isRequired,
  indexTravel: PropTypes.shape.isRequired,
};

export default TripCard;
