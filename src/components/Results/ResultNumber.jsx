import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/global.css';
import '../../assets/css/Results/ResultNumber.css';

const ResultNumber = ({ filterList }) => {
  return (
    <div className="results-number">
      {Object.keys(filterList).length} résultat
      {Object.keys(filterList).length > 1 && 's'}
    </div>
  );
};

ResultNumber.propTypes = {
  filterList: PropTypes.shape.isRequired,
};

export default ResultNumber;
