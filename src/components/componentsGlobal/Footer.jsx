import React from 'react';
import fb from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import twitter from '../../assets/images/twitter-sign.png';

const Footer = () => {
  return (
    <footer>
      <div className="links">
        <div className="contact">
          <h4>Contact</h4>
          <ul>
            <li>
              <span>&#x2706;</span> 9913372020
            </li>
            <li>@ contact@t-lorean.com</li>
          </ul>
        </div>
        <div className="follow">
          <h4>Suivez Nous !</h4>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/Martymaaaaacflai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fb} alt="facebook de Marty McFly" />
              </a>
            </li>
            <li>
              {' '}
              <a
                href="https://www.instagram.com/backtothefuturetrilogy/?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="compte insta" />{' '}
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/backtothefuture?lang=fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="compte twitter" />
              </a>
            </li>
          </ul>
        </div>
        <div className="infos">
          <h4>Informations</h4>
          <ul>
            <li>CGU</li>
            <li> Charte du voyageur </li>
            <li> Mentions légales</li>
            <li>RGPD</li>
          </ul>
        </div>
      </div>
      <div className="credits">
        <p>&copy;Les Gardiens de la Galaxie pour T-LOREAN - 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
