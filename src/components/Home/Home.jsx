import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterTravel from '../componentsGlobal/FilterTravel';
import '../../assets/css/global.css';
import '../../assets/css/Home/Home.css';
import Welcome from './Welcome';
import SearchBar from './SearchBar';


const Home = () => {
  const [travels, setTravels] = useState([]);


  useEffect(() => {
    axios
      .get('https://api-airbnb-node.herokuapp.com/api/travels')
      .then((response) => setTravels(response.data));
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
        <SearchBar />
      </div>
      <div className="home-filters">
        <h2>Époques</h2>
        <div className="home-filter-era">
          <FilterTravel data={filterTravelEraPrehistoire} type="Préhistoire" />
          <FilterTravel data={filterTravelEraAntiquite} type="Antiquité" />
          <FilterTravel data={filterTravelEraMoyenAge} type="Moyen-Âge" />
          <FilterTravel data={filterTravelEraRenaissance} type="Renaissance" />
          <FilterTravel
            data={filterTravelEraTempsModernes}
            type="Temps modernes"
          />
          <FilterTravel data={filterTravelEraFutur} type="Futur" />
        </div>
        <h2>Sensations</h2>
        <div className="home-filter-level">
          <FilterTravel data={filterTravelSensationOne} type="Calme" />
          <FilterTravel data={filterTravelSensationTwo} type="Aventure" />
          <FilterTravel data={filterTravelSensationThree} type="Extrême" />
        </div>
      </div>
    </div>
  );
};

export default Home;
