import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './assets/css/styles.css';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
