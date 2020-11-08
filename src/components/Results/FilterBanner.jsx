import React from 'react';

import '../../assets/css/global.css';
import '../../assets/css/Results/FilterBanner.css';
import era1 from '../../assets/images/filters/era1.jpg';
import era2 from '../../assets/images/filters/era2.jpg';
import era3 from '../../assets/images/filters/era3.jpg';
import era4 from '../../assets/images/filters/era4.jpg';
import era5 from '../../assets/images/filters/era5.jpg';
import era6 from '../../assets/images/filters/era6.png';
import level1 from '../../assets/images/filters/level1.jpeg';
import level2 from '../../assets/images/filters/level2.jpeg';
import level3 from '../../assets/images/filters/level3.jpeg';

const FilterBanner = (props) => {
  const { filterType, filterName, handleSubfiltering } = props;
  let filterNameTitle = '';
  let filterNameSource = '';

  switch (filterName) {
    case 'Préhistoire':
      filterNameTitle = 'Préhistoire';
      filterNameSource = `${era1}`;
      break;
    case 'Antiquité':
      filterNameTitle = 'Antiquité';
      filterNameSource = `${era2}`;
      break;
    case 'Moyen-Âge':
      filterNameTitle = 'Moyen-Âge';
      filterNameSource = `${era3}`;
      break;
    case 'Renaissance':
      filterNameTitle = 'Renaissance';
      filterNameSource = `${era4}`;
      break;
    case 'Temps modernes':
      filterNameTitle = 'Temps modernes';
      filterNameSource = `${era5}`;
      break;
    case 'Futur':
      filterNameTitle = 'Futur';
      filterNameSource = `${era6}`;
      break;
    case 'Détente':
      filterNameTitle = 'Détente';
      filterNameSource = `${level1}`;
      break;
    case 'Aventure':
      filterNameTitle = 'Aventure';
      filterNameSource = `${level2}`;
      break;
    case 'Extrême':
      filterNameTitle = 'Extrême';
      filterNameSource = `${level3}`;
      break;
    default:
      filterNameTitle = 'Try again!';
      filterNameSource = `${era1}`;
  }

  if (filterType === 'era') {
    return (
      <div>
        <div className="nav-filter">
          <h2>{filterNameTitle}</h2>
        </div>
        <img
          className="filter-banner"
          src={filterNameSource}
          alt={filterNameTitle}
        />
        <h3 className="subfiltering">Trier par sensations</h3>
        <div className="subfilter-list">
          <div className="subfilter-card" onClick={handleSubfiltering}>
            <img className="subfilter" src={level1} alt="Détente" />
            <h4>Détente</h4>
          </div>
          <div className="subfilter-card" onClick={handleSubfiltering}>
            <img className="subfilter" src={level2} alt="Aventure" />
            <h4>Aventure</h4>
          </div>
          <div className="subfilter-card" onClick={handleSubfiltering}>
            <img className="subfilter" src={level3} alt="Extrême" />
            <h4>Extrême</h4>
          </div>
        </div>
      </div>
    );
  } else if (filterType === '1' || filterType === '2' || filterType === '3') {
    return (
      <div>
        <div className="nav-filter">
          <h2>{filterNameTitle}</h2>
        </div>
        <img
          className="filter-banner"
          src={filterNameSource}
          alt={filterNameTitle}
        />
        <h3 className="subfiltering">Trier par époques</h3>
        <div className="subfilter-list">
          <div className="subfilter-card" onClick={handleSubfiltering}>
            <img className="subfilter" src={era1} alt="Préhistoire" />
            <h4>Préhistoire</h4>
          </div>
          <div className="subfilter-card" onClick={handleSubfiltering}>
            <img className="subfilter" src={era2} alt="Antiquité" />
            <h4>Antiquité</h4>
          </div>
          <div className="subfilter-card" onClick={handleSubfiltering}>
            <img className="subfilter" src={era3} alt="Moyen-Âge" />
            <h4>Moyen-Âge</h4>
          </div>
          <div className="subfilter-card" onClick={handleSubfiltering}>
            <img className="subfilter" src={era4} alt="Renaissance" />
            <h4>Renaissance</h4>
          </div>
          <div className="subfilter-card" onClick={handleSubfiltering}>
            <img className="subfilter" src={era5} alt="Temps modernes" />
            <h4>Temps modernes</h4>
          </div>
          <div className="subfilter-card" onClick={handleSubfiltering}>
            <img className="subfilter" src={era6} alt="Futur" />
            <h4>Futur</h4>
          </div>
        </div>
      </div>
    );
  }
};

export default FilterBanner;
