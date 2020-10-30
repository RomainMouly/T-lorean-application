import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../assets/css/componentsGlobal/FilterTravel.css';

const FilterTravel = ({ data, type, image }) => {
  return (
    <ul>
      <li>
        <Link
          to={{ pathname: '/Results', query: { filter: { ...data } } }}
          className="link-box"
          style={{ backgroundImage: `url(${image})` }}
        >
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
  image: PropTypes.string.isRequired,
};

export default FilterTravel;
