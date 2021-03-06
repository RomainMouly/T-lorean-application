import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Results from './components/Results/Results';
import Trip from './components/Trip/Trip';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import Footer from './components/componentsGlobal/Footer';
import Admin from './components/Admin/Admin';
import HomeButton from './components/componentsGlobal/HomeButton';
import TravelerChart from './components/componentsGlobal/TravelerChart';

import './assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const adminPath = process.env.REACT_APP_ADMIN_URL;
  return (
    <div className="App">
      <HomeButton />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Results/:name/:type" component={Results} />
        <Route exact path="/Trip/:id" component={Trip} />
        <Route exact path="/Booking/:id" component={Booking} />
        <Route exact path="/Login" component={Login} />
        <Route exact path={`/admin/${adminPath}`} component={Admin} />
        <Route exact path="/Traveler-chart" component={TravelerChart} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
