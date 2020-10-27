import React from 'react';
import PropTypes from 'prop-types';
import pin from '../../assets/images/location-pin.png';
import fire from '../../assets/images/fire.png';
import '../../assets/css/global.css';

const Results = ({ location }) => {
  const filterOne = location.query.filter;
  return (
    <div className="results">
      <div className="results-number">
        {Object.keys(filterOne).length} résultat
        {Object.keys(filterOne).length > 1 && 's'}
      </div>
      <div className="results-list">
        {Object.keys(filterOne).map((indexTravel) => (
          <div className="trip-card">
            <div className="trip-container">
              <div className="trip-card-carrousel">
                <img className="trip-sensation-meter" src={fire} alt="fire" />
              </div>
              <div className="trip-caption">
                <div className="trip-info">
                  <div>{filterOne[indexTravel].title}</div>
                  <div className="trip-info-country">
                    <img className="pin" src={pin} alt="pin" />
                    {filterOne[indexTravel].country}
                  </div>
                </div>
                <div className="trip-price">
                  <div>{filterOne[indexTravel].price}€/pers</div>
                  <div>la journée</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
Results.propTypes = {
  location: PropTypes.shape({
    query: PropTypes.shape({ filter: PropTypes.shape({}) }).isRequired,
  }).isRequired,
};

export default Results;
