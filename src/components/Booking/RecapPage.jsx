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
    <div>
      <div className="recap">
        <div className="travelCard">
          <div className="underlineLarge" />
          <div className="cardTitle"> Votre voyage </div>

          <p className="cardDetail">
            Vous avez sélectionné l'expérience "{travel.title}"
          </p>
          <p className="cardDetail">
            Vous serez {peopleNumber} personne{peopleNumber > 1 && 's'} à
            voyager{' '}
          </p>
          <p className="cardDetail">
            Vous partirez {format(startDate, 'dd MMMM yyyy', { locale: fr })} au{' '}
            {format(endDate, 'dd MMMM yyyy', { locale: fr })}{' '}
          </p>
          <p className="cardDetail">
            {' '}
            soit {daysNumber} jour
            {daysNumber > 1 && 's'} sur place
          </p>
        </div>

        <div className="factureCard">
          <div className="underlineLarge" />
          <div className="cardTitle"> Détails du prix </div>
          <div className="CardDetail">
            Nombre de voyageur{peopleNumber > 1 && 's'} : {peopleNumber}
          </div>

          <div className="factureCalcul">
            <div className="pricePerDay">
              <div>
                {travel.price}€ x {daysNumber} jour{daysNumber > 1 && 's'}{' '}
              </div>
              <div> {priceByDay}€</div>
            </div>

            <div className="priceWithPeople">
              <div className="finalCalc">
                {priceByDay}€ x {peopleNumber} voyageur{peopleNumber > 1 && 's'}
              </div>
              <div className="total">Total TTC {facture()}€ </div>
            </div>
          </div>
        </div>
      </div>
      <div className="colorButton" id="bookingOk">
        Valider et payer
      </div>
    </div>
  );
};

export default RecapPage;
