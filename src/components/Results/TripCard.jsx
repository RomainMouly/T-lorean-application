import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/global.css';
import '../../assets/css/Results/TripCard.css';
import pin from '../../assets/images/location-pin.png';
import SensationMeter from './SensationMeter';

const TripCard = ({ data, indexTravel }) => {
  return (
    <div className="trip-container">
      <div className="trip-card-carrousel">
        <SensationMeter data={data[indexTravel].level} />
      </div>
      <div className="trip-caption">
        <div className="trip-info">
          <div>{data[indexTravel].title}</div>
          <div className="trip-info-country">
            <img className="pin" src={pin} alt="pin" />
            {data[indexTravel].country}
          </div>
        </div>
        <div className="trip-price">
          <div>{data[indexTravel].price}€/pers</div>
          <div>la journée</div>
        </div>
      </div>
    </div>
  );
};

TripCard.propTypes = {
  data: PropTypes.shape.isRequired,
  indexTravel: PropTypes.shape.isRequired,
};

export default TripCard;
