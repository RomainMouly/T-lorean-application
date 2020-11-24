import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import home from '../../assets/images/home.png';
import backarrow from '../../assets/images/left-arrow.png';
import '../../assets/css/componentsGlobal/HomeButton.css';

const HomeButton = () => {
  const history = useHistory();
  return (
    <div className="homeButton">
      <Link to="/">
        <img src={home} alt="home" />
      </Link>
      <div>
        <div
          className="backButton"
          onClick={() => {
            history.goBack();
          }}
        >
          <img src={backarrow} alt="return to previous page" />
        </div>
      </div>
    </div>
  );
};

export default HomeButton;
