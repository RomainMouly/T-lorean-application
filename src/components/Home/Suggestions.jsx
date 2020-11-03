import React from 'react';

const Suggestions = ({ suggestionInputChange, results }) => {
  const options = results.map((travel) => (
    <li onClick={() => suggestionInputChange(travel.title)} key={travel.id}>
      {travel.title}
    </li>
  ));
  return <ul>{options}</ul>;
};

export default Suggestions;
