import React from 'react';
import PropTypes from 'prop-types';
import pin from '../../assets/images/location-pin.png';
import flash from '../../assets/images/flash.png';
import Calendar from './Calendar';

const Description = (props) => {
  const { travelCountry, travelPrice, travelDescription, travelLevel } = props;
  const levelName = {
    1: <img src={flash} alt="flash" />,
    2: (
      <div>
        <img src={flash} alt="flash" />
        <img src={flash} alt="flash" />
      </div>
    ),
    3: (
      <div>
        <img src={flash} alt="flash" />
        <img src={flash} alt="flash" />
        <img src={flash} alt="flash" />
      </div>
    ),
  };

  return (
    <div className="trip-texts">
      <div className="travel-info">
        <div>
          <img className="pin" src={pin} alt="pin" />
          {travelCountry}&nbsp;<span className="separation-trait">|</span>{' '}
          &nbsp;
        </div>
        <div>
          {travelPrice} €/personne la journée{' '}
          <span className="separation-trait">|</span>&nbsp;{' '}
        </div>
        <div className="travel-info-level">{levelName[travelLevel]}</div>
      </div>
      <div className="trip-infos">
        <div className="description">
          <div className="api-description">{travelDescription}</div>
          <div className="underline" />
          <p>
            Présentez-vous en agence deux heures avant l’horaire de départ
            indiqué sur votre réservation.
          </p>
          <div className="underline" />
          <p>
            Santé et sécurité :<br />
            Avant votre départ, veuillez consulter le site du{' '}
            <a
              className="description-link-ext"
              href="https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/conseils-par-pays-destination/"
            >
              ministère des Affaires temporelles
            </a>{' '}
            pour connaître les risques sanitaires éventuels qui peuvent
            concerner votre destination.{' '}
          </p>{' '}
          <div className="underline" />
          <p>
            N’hésitez pas à nous contacter pour toute demande d’informations
            complémentaires, nos conseillers seront ravis de vous répondre !
          </p>{' '}
        </div>
        <Calendar className="calendar" />
      </div>
    </div>
  );
};

Description.propTypes = {
  travelCountry: PropTypes.string.isRequired,
  travelPrice: PropTypes.number.isRequired,
  travelDescription: PropTypes.string.isRequired,
  travelLevel: PropTypes.number.isRequired,
};

export default Description;
