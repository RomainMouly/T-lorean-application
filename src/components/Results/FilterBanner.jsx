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
  const { filterName } = props;
  switch (filterName) {
    case 'Préhistoire':
      return (
        <div>
          <div className="nav-filter">
            <h2>{filterName}</h2>
          </div>
          <img className="filter-banner" src={era1} alt={filterName} />
          <h3 className="subfiltering">Trier par sensations</h3>
          <div className="subfilter-list">
            <div className="subfilter-card">
              <img className="subfilter" src={level1} alt="Détente" />
              <h4>Détente</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={level2} alt="Aventure" />
              <h4>Aventure</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={level3} alt="Extrême" />
              <h4>Extrême</h4>
            </div>
          </div>
        </div>
      );
    case 'Antiquité':
      return (
        <div>
          <div className="nav-filter">
            <h2>{filterName}</h2>
          </div>
          <img className="filter-banner" src={era2} alt={filterName} />
          <h3 className="subfiltering">Trier par sensations</h3>
          <div className="subfilter-list">
            <div className="subfilter-card">
              <img className="subfilter" src={level1} alt="Détente" />
              <h4>Détente</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={level2} alt="Aventure" />
              <h4>Aventure</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={level3} alt="Extrême" />
              <h4>Extrême</h4>
            </div>
          </div>
        </div>
      );
    case 'Moyen-Âge':
      return (
        <div>
          <div className="nav-filter">
            <h2>{filterName}</h2>
          </div>
          <img className="filter-banner" src={era3} alt={filterName} />
          <h3 className="subfiltering">Trier par sensations</h3>
          <div className="subfilter-list">
            <div className="subfilter-card">
              <img className="subfilter" src={level1} alt="Détente" />
              <h4>Détente</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={level2} alt="Aventure" />
              <h4>Aventure</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={level3} alt="Extrême" />
              <h4>Extrême</h4>
            </div>
          </div>
        </div>
      );
    case 'Renaissance':
      return (
        <div>
          <div className="nav-filter">
            <h2>{filterName}</h2>
          </div>
          <img className="filter-banner" src={era4} alt={filterName} />
          <h3 className="subfiltering">Trier par sensations</h3>
          <div className="subfilter-list">
            <div className="subfilter-card">
              <img className="subfilter" src={level1} alt="Détente" />
              <h4>Détente</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={level2} alt="Aventure" />
              <h4>Aventure</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={level3} alt="Extrême" />
              <h4>Extrême</h4>
            </div>
          </div>
        </div>
      );
    case 'Temps modernes':
      return (
        <div>
          <div className="nav-filter">
            <h2>{filterName}</h2>
          </div>
          <img className="filter-banner" src={era5} alt={filterName} />
          <h3 className="subfiltering">Trier par sensations</h3>
          <div className="subfilter-list">
            <div className="subfilter-card">
              <img className="subfilter" src={level1} alt="Détente" />
              <h4>Détente</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={level2} alt="Aventure" />
              <h4>Aventure</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={level3} alt="Extrême" />
              <h4>Extrême</h4>
            </div>
          </div>
        </div>
      );
    case 'Futur':
      return (
        <div>
          <div className="nav-filter">
            <h2>{filterName}</h2>
          </div>
          <img className="filter-banner" src={era6} alt={filterName} />
          <h3 className="subfiltering">Trier par sensations</h3>
          <div className="subfilter-list">
            <div className="subfilter-card">
              <img className="subfilter" src={level1} alt="Détente" />
              <h4>Détente</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={level2} alt="Aventure" />
              <h4>Aventure</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={level3} alt="Extrême" />
              <h4>Extrême</h4>
            </div>
          </div>
        </div>
      );
    case 'Détente':
      return (
        <div>
          <div className="nav-filter">
            <h2>{filterName}</h2>
          </div>
          <img className="filter-banner" src={level1} alt={filterName} />
          <h3 className="subfiltering">Trier par époques</h3>
          <div className="subfilter-list">
            <div className="subfilter-card">
              <img className="subfilter" src={era1} alt="Préhistoire" />
              <h4>Préhistoire</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={era2} alt="Antiquité" />
              <h4>Antiquité</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={era3} alt="Moyen-Âge" />
              <h4>Moyen-Âge</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={era4} alt="Renaissance" />
              <h4>Renaissance</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={era5} alt="Temps modernes" />
              <h4>Temps modernes</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={era6} alt="Futur" />
              <h4>Futur</h4>
            </div>
          </div>
        </div>
      );
    case 'Aventure':
      return (
        <div>
          <div className="nav-filter">
            <h2>{filterName}</h2>
          </div>
          <img className="filter-banner" src={level2} alt={filterName} />
          <h3 className="subfiltering">Trier par époques</h3>
          <div className="subfilter-list">
            <div className="subfilter-card">
              <img className="subfilter" src={era1} alt="Préhistoire" />
              <h4>Préhistoire</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={era2} alt="Antiquité" />
              <h4>Antiquité</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={era3} alt="Moyen-Âge" />
              <h4>Moyen-Âge</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={era4} alt="Renaissance" />
              <h4>Renaissance</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={era5} alt="Temps modernes" />
              <h4>Temps modernes</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={era6} alt="Futur" />
              <h4>Futur</h4>
            </div>
          </div>
        </div>
      );
    case 'Extrême':
      return (
        <div>
          <div className="nav-filter">
            <h2>{filterName}</h2>
          </div>
          <img className="filter-banner" src={level3} alt={filterName} />
          <h3 className="subfiltering">Trier par époques</h3>
          <div className="subfilter-list">
            <div className="subfilter-card">
              <img className="subfilter" src={era1} alt="Préhistoire" />
              <h4>Préhistoire</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={era2} alt="Antiquité" />
              <h4>Antiquité</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={era3} alt="Moyen-Âge" />
              <h4>Moyen-Âge</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={era4} alt="Renaissance" />
              <h4>Renaissance</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={era5} alt="Temps modernes" />
              <h4>Temps modernes</h4>
            </div>
            <div className="subfilter-card">
              <img className="subfilter" src={era6} alt="Futur" />
              <h4>Futur</h4>
            </div>
          </div>
        </div>
      );
    default:
      return <div>Try again!</div>;
  }
};

export default FilterBanner;
