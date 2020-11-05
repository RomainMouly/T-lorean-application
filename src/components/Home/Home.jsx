import React, { useState, useEffect } from 'react';
import FilterTravel from '../componentsGlobal/FilterTravel';
import '../../assets/css/global.css';
import '../../assets/css/Home/Home.css';
import Welcome from './Welcome';
import SearchBar from './SearchBar';
import era1 from '../../assets/images/filters/era1.jpg';
import era2 from '../../assets/images/filters/era2.jpg';
import era3 from '../../assets/images/filters/era3.jpg';
import era4 from '../../assets/images/filters/era4.jpg';
import era5 from '../../assets/images/filters/era5.jpg';
import era6 from '../../assets/images/filters/era6.png';
import level1 from '../../assets/images/filters/level1.jpeg';
import level2 from '../../assets/images/filters/level2.jpeg';
import level3 from '../../assets/images/filters/level3.jpeg';
import { getTravels } from '../../interfaces/database/travel';

const Home = ({ history }) => {
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    getTravels().then((response) => setTravels(response.data));
  }, []);

  const filterTravelSensationOne = travels.filter(
    (travel) => travel.level === 1
  );
  const filterTravelSensationTwo = travels.filter(
    (travel) => travel.level === 2
  );
  const filterTravelSensationThree = travels.filter(
    (travel) => travel.level === 3
  );
  const filterTravelEraPrehistoire = travels.filter(
    (travel) => travel.era === 'Préhistoire'
  );
  const filterTravelEraAntiquite = travels.filter(
    (travel) => travel.era === 'Antiquité'
  );
  const filterTravelEraMoyenAge = travels.filter(
    (travel) => travel.era === 'Moyen-Âge'
  );
  const filterTravelEraRenaissance = travels.filter(
    (travel) => travel.era === 'Renaissance'
  );
  const filterTravelEraTempsModernes = travels.filter(
    (travel) => travel.era === 'Temps modernes'
  );
  const filterTravelEraFutur = travels.filter(
    (travel) => travel.era === 'Futur'
  );

  return (
    <div>
      <div>
        <Welcome />
      </div>
      <div>
        <SearchBar history={history} />
      </div>
      <div className="home-filters">
        <h2>Quand voulez-vous aller ?</h2>
        <div className="home-filter-era">
          <FilterTravel
            data={filterTravelEraPrehistoire}
            type="Préhistoire"
            image={era1}
            name="era"
          />
          <FilterTravel
            data={filterTravelEraAntiquite}
            type="Antiquité"
            image={era2}
            name="era"
          />
          <FilterTravel
            data={filterTravelEraMoyenAge}
            type="Moyen-Âge"
            image={era3}
            name="era"
          />
          <FilterTravel
            data={filterTravelEraRenaissance}
            type="Renaissance"
            image={era4}
            name="era"
          />
          <FilterTravel
            data={filterTravelEraTempsModernes}
            type="Temps modernes"
            image={era5}
            name="era"
          />
          <FilterTravel
            data={filterTravelEraFutur}
            type="Futur"
            image={era6}
            name="era"
          />
        </div>
        <h2>Degré de sensation </h2>
        <div className="home-filter-level">
          <FilterTravel
            data={filterTravelSensationOne}
            type="Détente"
            image={level1}
            name="1"
          />
          <FilterTravel
            data={filterTravelSensationTwo}
            type="Aventure"
            image={level2}
            name="2"
          />
          <FilterTravel
            data={filterTravelSensationThree}
            type="Extrême"
            image={level3}
            name="3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
