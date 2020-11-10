import React from 'react';
import PropTypes from 'prop-types';
import pin from '../../assets/images/location-pin.png';
import Calendar from '../Booking/Calendar';

const Description = (props) => {
  const { travelTitle, travelCountry, travelPrice, travelDescription } = props;

  return (
    <div className="trip-texts">
      <h2>{travelTitle}</h2>
      <div className="trip-infos">
        <div className="trip-infos-country">
          <img className="pin" src={pin} alt="pin" />
          {travelCountry}
        </div>
        <div className="trip-infos-price">
          {travelPrice} €/personne la journée
        </div>
      </div>
      <div className="description">
        {travelDescription}
        <p>
          Présentez-vous en agence deux heures avant l’horaire de départ indiqué
          sur votre réservation.
        </p>
        <p>
          Santé et sécurité :<br />
          Avant votre départ, veuillez consulter le site du{' '}
          <a
            className="description-link-ext"
            href="https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/conseils-par-pays-destination/"
          >
            ministère des Affaires temporelles
          </a>{' '}
          pour connaître les risques sanitaires éventuels qui peuvent concerner
          votre destination.
        </p>
        <p>
          N’hésitez pas à nous contacter pour toute demande d’informations
          complémentaire, nos conseillers seront ravis de vous répondre !
        </p>
      </div>
      <Calendar className="calendar" />
    </div>
  );
};

Description.propTypes = {
  travel: PropTypes.shape({}).isRequired,
};

export default Description;
