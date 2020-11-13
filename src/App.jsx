import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './assets/css/styles.css';
import Home from './components/Home/Home';
import Results from './components/Results/Results';
import Trip from './components/Trip/Trip';
import Booking from './components/Booking/Booking';
import Footer from './components/componentsGlobal/Footer';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Results/:name/:type" exact component={Results} />
        <Route path="/Trip/:id" exact component={Trip} />
        <Route path="/Booking/:id" exact component={Booking} />
        <Route path="/Admin" exact component={Admin} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
