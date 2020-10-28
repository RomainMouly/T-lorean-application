import React from 'react';
import PropTypes from 'prop-types';

const Suggestions = ({ results }) => {
  const options = results.map((travel) => (
    <li key={travel.id}>{travel.title}</li>
  ));
  return <ul>{options}</ul>;
};

Suggestions.PropTypes = {
  results: PropTypes.array,
};

export default Suggestions;
