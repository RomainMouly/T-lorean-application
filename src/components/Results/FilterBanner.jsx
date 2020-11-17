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
  const {
    filterType,
    filterName,
    handleSubfilterByLevel,
    handleSubfilterByEra,
    handleRemoveSubfilter,
  } = props;
  let filterNameTitle;
  let filterNameSource;

  switch (filterType) {
    case 'era':
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
        default:
          filterNameTitle = 'Préhistoire';
          filterNameSource = `${era1}`;
      }
      break;
    case '1':
    case '2':
    case '3':
      switch (filterName) {
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
          filterNameTitle = 'Détente';
          filterNameSource = `${level1}`;
      }
      break;
    default:
      filterNameTitle = 'Try again!';
      filterNameSource = `${era1}`;
  }

  if (filterType === 'era') {
    return (
      <div>
        <div className="nav-filter">
          <div className="underline" />
          <h2>{filterNameTitle}</h2>
          <div className="underline" />
        </div>
        <img
          className="filter-banner"
          src={filterNameSource}
          alt={filterNameTitle}
        />
        <div className="subfilter-management">
          <h3 className="subfiltering">Trier par degré de sensation </h3>
          <button
            className="cancel-filter"
            type="button"
            onClick={handleRemoveSubfilter}
          >
            Annuler
          </button>
        </div>{' '}
        <div className="subfilter-list">
          <div
            className="subfilter-card"
            role="button"
            tabIndex="0"
            onClick={() => handleSubfilterByLevel(1)}
            onKeyDown={() => handleSubfilterByLevel(1)}
          >
            <img className="subfilter" src={level1} alt="Détente" />
            <div className="subfilter-name">
              <h4>Détente</h4>
            </div>
          </div>
          <div
            className="subfilter-card"
            role="button"
            tabIndex="0"
            onClick={() => handleSubfilterByLevel(2)}
            onKeyDown={() => handleSubfilterByLevel(2)}
          >
            <img className="subfilter" src={level2} alt="Aventure" />
            <div className="subfilter-name">
              <h4>Aventure</h4>
            </div>
          </div>
          <div
            className="subfilter-card"
            role="button"
            tabIndex="0"
            onClick={() => handleSubfilterByLevel(3)}
            onKeyDown={() => handleSubfilterByLevel(3)}
          >
            <img className="subfilter" src={level3} alt="Extrême" />
            <div className="subfilter-name">
              <h4>Extrême</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (filterType === '1' || filterType === '2' || filterType === '3') {
    return (
      <div>
        <div className="nav-filter">
          <div className="underline" />
          <h2>{filterNameTitle}</h2>
          <div className="underline" />
        </div>
        <img
          className="filter-banner"
          src={filterNameSource}
          alt={filterNameTitle}
        />
        <div className="subfilter-management">
          <h3 className="subfiltering">Trier par époque</h3>
          <button
            className="cancel-filter"
            type="button"
            onClick={handleRemoveSubfilter}
          >
            Annuler
          </button>
        </div>

        <div className="subfilter-list">
          <div
            className="subfilter-card"
            role="button"
            tabIndex="0"
            onClick={() => handleSubfilterByEra('Préhistoire')}
            onKeyDown={() => handleSubfilterByEra('Préhistoire')}
          >
            <img className="subfilter" src={era1} alt="Préhistoire" />
            <div className="subfilter-name">
              <h4>Préhistoire</h4>
            </div>
          </div>
          <div
            className="subfilter-card"
            role="button"
            tabIndex="0"
            onClick={() => handleSubfilterByEra('Antiquité')}
            onKeyDown={() => handleSubfilterByEra('Antiquité')}
          >
            <img className="subfilter" src={era2} alt="Antiquité" />
            <div className="subfilter-name">
              <h4>Antiquité</h4>
            </div>
          </div>
          <div
            className="subfilter-card"
            role="button"
            tabIndex="0"
            onClick={() => handleSubfilterByEra('Moyen-Âge')}
            onKeyDown={() => handleSubfilterByEra('Moyen-Âge')}
          >
            <img className="subfilter" src={era3} alt="Moyen-Âge" />
            <div className="subfilter-name">
              <h4>Moyen-Âge</h4>
            </div>
          </div>
          <div
            className="subfilter-card"
            role="button"
            tabIndex="0"
            onClick={() => handleSubfilterByEra('Renaissance')}
            onKeyDown={() => handleSubfilterByEra('Renaissance')}
          >
            <img className="subfilter" src={era4} alt="Renaissance" />
            <div className="subfilter-name">
              <h4>Renaissance</h4>
            </div>
          </div>
          <div
            className="subfilter-card"
            role="button"
            tabIndex="0"
            onClick={() => handleSubfilterByEra('Temps modernes')}
            onKeyDown={() => handleSubfilterByEra('Temps modernes')}
          >
            <img className="subfilter" src={era5} alt="Temps modernes" />
            <div className="subfilter-name">
              <h4>Temps modernes</h4>
            </div>
          </div>
          <div
            className="subfilter-card"
            role="button"
            tabIndex="0"
            onClick={() => handleSubfilterByEra('Futur')}
            onKeyDown={() => handleSubfilterByEra('Futur')}
          >
            <img className="subfilter" src={era6} alt="Futur" />
            <div className="subfilter-name">
              <h4>Futur</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default FilterBanner;
