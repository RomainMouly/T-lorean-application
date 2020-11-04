import React from 'react';
import logo from '../../assets/images/TLorean_logo.png';

const Welcome = () => {
  return (
    <div className="welcome">
      <section className="banner">
        <img className="logo" src={logo} alt="logo" />
        <h1>T-Lorean</h1>
        <p className="presentation">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam qui
          saepe non alias nesciunt dolorum, repellendus commodi harum
          exercitationem quisquam soluta. Quia tenetur cupiditate dolorum vitae
          reprehenderit consectetur doloremque ut.
        </p>
      </section>
    </div>
  );
};

export default Welcome;
