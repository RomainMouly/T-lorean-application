import React from 'react';

const Suggestions = ({ results }) => {
  const options = results.map((travel) => (
    <li key={travel.id}>{travel.title}</li>
  ));
  return <ul>{options}</ul>;
};

export default Suggestions;
