import React from 'react';
import PropTypes from 'prop-types';

import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import '../../assets/css/RecapPage.css';

const RecapPage = ({ travel, startDate, endDate, peopleNumber }) => {
  const calcDays = (date1, date2) => {
    const diffInTime = date1.getTime() - date2.getTime();
    return -Math.ceil(diffInTime / (1000 * 3600 * 24));
  };
  const daysNumber = calcDays(startDate, endDate) + 1;

  const transportFees = 200;
  const additionalFees = 50;
  const facture = () => {
    return peopleNumber * daysNumber * travel.price;
  };
  const totalCost = () => {
    return (
      peopleNumber * daysNumber * travel.price + transportFees + additionalFees
    );
  };

  return (
    <div>
      <div className="recap">
        <div className="travelCard">
          <div className="cardTitle"> Votre voyage </div>
          <div className="underlineLarge" />
          <p className="cardDetail">
            Vous avez sélectionné l&apos;expérience &quot;{travel.title}&quot; .
          </p>

          <p className="cardDetail">
            Vous serez {peopleNumber} personne{peopleNumber > 1 && 's'} à
            voyager, du {format(startDate, 'dd MMMM yyyy', { locale: fr })} au{' '}
            {format(endDate, 'dd MMMM yyyy', { locale: fr })} soit {daysNumber}{' '}
            jour{daysNumber > 1 && 's'} sur place.
          </p>
          <p className="cardDetail">
            {' '}
            Avant de partir, n&apos;oubliez pas de consulter la charte du
            voyageur temporel !
          </p>
        </div>

        <div className="factureCard">
          <div className="cardTitle"> Détails du prix </div>
          <div className="underlineLarge" />
          <div className="factureCalcul">
            <div className="facture">
              <div>
                {travel.price}€ x {daysNumber} jour{daysNumber > 1 && 's'} x{' '}
                {peopleNumber} voyageur{peopleNumber > 1 && 's'}
              </div>
              <div> {facture()}€</div>
            </div>
            <div className="facture">
              <div>Frais de transports</div>
              <div> {transportFees}€</div>
            </div>
            <div className="facture">
              <div>Frais de service</div>
              <div> {additionalFees}€</div>
            </div>
            <div className="underlineLarge" />
            <div className="facture" id="total">
              <div>Prix total</div>
              <div> {totalCost()}€</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RecapPage.propTypes = {
  travel: PropTypes.shape({
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  peopleNumber: PropTypes.number.isRequired,
};

export default RecapPage;
