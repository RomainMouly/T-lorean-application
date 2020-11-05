import React from 'react';
import logo from '../../assets/images/TLorean_logo2.png';

const Welcome = () => {
  return (
    <section className="banner">
      <img className="logo" src={logo} alt="logo" />
      <h1>T-Lorean</h1>
      <h2 className="slogan">Voyagez n'importe quand.</h2>
      <div className="presentation">
        <p>
          {' '}
          Plongez au cœur de l’Histoire ! Embarquez pour un voyage comme vous
          n’en avez jamais vécu : changez d'époque ! Grâce à notre technologie
          de pointe dans le domaine temporel, nous offrons une large gamme de
          séjours pour vivre le grand frisson ou simplement vous détendre.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
