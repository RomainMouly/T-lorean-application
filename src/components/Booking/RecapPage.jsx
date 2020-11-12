import React from 'react';
import PropTypes from 'prop-types';

import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import '../../assets/css/RecapPage.css';

const RecapPage = ({ travel, startDate, endDate, peopleNumber }) => {
  const calcDays = (date1, date2) => {
    const diffInTime = date1.getTime() - date2.getTime();
    return -(diffInTime / (1000 * 3600 * 24));
  };
  const daysNumber = calcDays(startDate, endDate);

  const facture = () => {
    return peopleNumber * daysNumber * travel.price;
  };

  const priceByDay = travel.price * daysNumber;

  return (
    <div className="recap">
      <h2>Récapitulatif de votre voyage</h2>
      <h3>Vous avez sélectionné l'expérience "{travel.title}"</h3>
      <h4>
        Vous serez {peopleNumber} personne{peopleNumber > 1 && 's'} à voyager du{' '}
        {format(startDate, 'dd MMMM yyyy', { locale: fr })} au{' '}
        {format(endDate, 'dd MMMM yyyy', { locale: fr })} soit {daysNumber} jour
        {daysNumber > 1 && 's'} sur place
      </h4>
      <h4> Tarif pour votre séjour</h4>
      <div className="factureCard">
        <div className="oneLine"> {travel.price}€/pers la journée</div>
        <hr />
        <div className="date">
          <div>
            arrivée le {format(startDate, 'dd MMMM yyyy', { locale: fr })}
          </div>
          <div>/</div>
          <div>départ le {format(endDate, 'dd MMMM yyyy', { locale: fr })}</div>
        </div>
        <hr />
        <div className="oneLine">
          Nombre de voyageur{peopleNumber > 1 && 's'} : {peopleNumber}
        </div>
        <hr />
        <div className="factureCalcul">
          <div className="pricePerDay">
            <div>
              {travel.price}€ X {daysNumber} jour{daysNumber > 1 && 's'} ={' '}
            </div>
            <div> soit {priceByDay}€</div>
          </div>
          <hr />
          <div className="priceWithPeople">
            <div className="finalCalc">
              {priceByDay}€ X {peopleNumber} voyageur{peopleNumber > 1 && 's'}
            </div>
            <hr />
            <div className="total">Total : {facture()}€ TTC</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecapPage;
