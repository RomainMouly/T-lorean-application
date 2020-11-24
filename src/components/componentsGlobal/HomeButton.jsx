import React from 'react';
import { Link } from 'react-router-dom';
import home from '../../assets/images/home.png';
import '../../assets/css/componentsGlobal/HomeButton.css';

const HomeButton = () => {
  return (
    <div className="homeButton">
      <Link to="/">
        <img src={home} alt="home" />
      </Link>
    </div>
  );
};

export default HomeButton;
