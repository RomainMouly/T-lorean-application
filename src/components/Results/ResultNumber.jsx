import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/global.css';
import '../../assets/css/Results/ResultNumber.css';

const ResultNumber = ({ data }) => {
  return (
    <div className="results-number">
      {Object.keys(data).length} résultat
      {Object.keys(data).length > 1 && 's'}
    </div>
  );
};

ResultNumber.propTypes = {
  data: PropTypes.shape.isRequired,
};

export default ResultNumber;
