import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../assets/css/componentsGlobal/FilterTravel.css';

const FilterTravel = ({ type, image, name }) => {
  return (
    <ul>
      <li>
        <Link
          to={`/Results/${name}/${type}`}
          className="link-box"
          style={{ backgroundImage: `url(${image})` }}
        >
          {type}
        </Link>
      </li>
    </ul>
  );
};

FilterTravel.propTypes = {
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FilterTravel;
