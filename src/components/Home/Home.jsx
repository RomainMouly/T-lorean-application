import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  componentDidMount() {
    axios
      .get('https://api-airbnb-node.herokuapp.com/api/accomodations')
      .then((response) => response.data);
  }

  render() {
    return <div>Home</div>;
  }
}

export default Home;
