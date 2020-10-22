import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Results from './components/Results/Results';
import Trip from './components/Trip/Trip';
import Booking from './components/Booking/Booking';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Results" component={Results} />
        <Route path="/Trip" component={Trip} />
        <Route path="/Booking" component={Booking} />
      </Switch>
    </div>
  );
}

export default App;
