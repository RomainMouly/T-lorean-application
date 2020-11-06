import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CarouselDetail = ({ pictures }) => {
  return (
    <div>
      {/* {pictures.map((picture) => (
        <img src={picture.url} alt={picture.id} />
      ))} pour avoir toutes les images avec le carousel, sinon pour une seule image voir ci dessous
      on peut egalement enlever pictures*/}
      <img
        className="carousel-box"
        src={pictures && pictures[1] && pictures[1].url}
      />{' '}
      {/*besoin de faire ca car les photos api mettent du temps à arriver
      du coup : on luii dit: si tu as une pictures et que tu as picture[1] tu affiches pictures[1].url
      si tu as une image ou pas tu m'affiche ou pas l'url de l'image
      obligé de faire ca pour une seule image dès que tu as du axios*/}
    </div>
  );
};

CarouselDetail.propTypes = {
  image: PropTypes.string.isRequired,
};

export default CarouselDetail;
