import React from 'react';
import logo from '../../assets/images/TLorean_logo.png';

const Welcome = () => {
  return (
    <div className="welcome">
      <section className="banner">
        <img className="logo" src={logo} alt="logo" />
        <h1>T-Lorean</h1>
        <p className="presentation">
          Plongez au cœur de l’Histoire !<br />
          Embarquez pour un voyage comme vous n’en avez jamais vécu ; changez
          d'époque ! Grâce à notre technologie de pointe dans le domaine
          temporel, nous offrons une large gamme de séjours pour vivre le grand
          frisson ou simplement vous détendre.
        </p>
      </section>
    </div>
  );
};

export default Welcome;
