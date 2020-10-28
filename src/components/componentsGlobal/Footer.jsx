import React from 'react';
import fb from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import twitter from '../../assets/images/twitter-sign.png';

const Footer = () => {
  return (
    <footer>
      <div className="contact">
        <h4>Contact</h4>
      </div>
      <div className="follow">
        <h4>Suivez Nous !</h4>
        <ul>
          <li>
            <img src={fb} alt="facebook de Marty McFly " />
          </li>
          <li>
            {' '}
            <img src={instagram} alt="compte insta" />{' '}
          </li>
          <li>
            <img src={twitter} alt="compte twitter" />
          </li>
        </ul>
      </div>
      <div className="informations">
        <h4>Informations</h4>
      </div>
    </footer>
  );
};

export default Footer;
