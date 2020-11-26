import React from 'react';

import CanvasJSReact from '../../assets/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

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
      text: 'Trending travels',
    },
    axisX: {
      title: 'Travels',
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
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
};

export default TravelGraph;
