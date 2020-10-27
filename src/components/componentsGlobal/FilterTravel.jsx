import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FilterTravel = ({ data, type }) => {
  return (
    <ul>
      <li>
        <Link to={{ pathname: '/Results', query: { filter: { ...data } } }}>
          {' '}
          {type}{' '}
        </Link>
      </li>
    </ul>
  );
};

FilterTravel.propTypes = {
  data: PropTypes.shape({}).isRequired,
  type: PropTypes.string.isRequired,
};

export default FilterTravel;
