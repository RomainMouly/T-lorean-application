import React from 'react';
import PropTypes from 'prop-types';
import CanvasJSReact from '../../assets/canvasjs.react';

const { CanvasJSChart } = CanvasJSReact;

const TravelGraph = ({ reservationsPerTravel }) => {
  const dataPoints = [];
  reservationsPerTravel.sort(
    (x, y) => Object.values(y)[0] - Object.values(x)[0]
  );
  reservationsPerTravel.forEach((reservationForTravel) =>
    dataPoints.push({
      label: Object.keys(reservationForTravel)[0],
      y: Object.values(reservationForTravel)[0],
    })
  );

  const options = {
    animationEnabled: true,
    theme: 'light2',
    title: {
      text: 'Voyages les plus réservés',
    },
    axisX: {
      title: 'Voyages',
      reversed: true,
    },
    axisY: {
      title: 'Nombre de réservations',
      includeZero: true,
    },
    data: [
      {
        type: 'bar',
        dataPoints: dataPoints,
      },
    ],
  };
  return (
    <div className="graphics">
      <CanvasJSChart options={options} />
    </div>
  );
};

TravelGraph.propTypes = {
  reservationsPerTravel: PropTypes.shape({
    sort: PropTypes.func.isRequired,
    forEach: PropTypes.func.isRequired,
  }).isRequired,
};

export default TravelGraph;
