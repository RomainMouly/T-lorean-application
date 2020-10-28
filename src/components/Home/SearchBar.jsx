import React, { Component } from 'react';
import axios from 'axios';
import Suggestions from './Suggestions';

const API_URL = 'https://api-airbnb-node.herokuapp.com/api/travels';

class SearchBar extends Component {
  state = {
    search: '',
    results: [],
  };

  getInfo = () => {
    axios.get(`${API_URL}`).then((response) =>
      this.setState({
        results: response.data.filter((travel) =>
          travel.title.toLowerCase().includes(this.state.search.toLowerCase())
        ),
      })
    );
  };

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
    this.getInfo();
  };

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          value={this.state.search}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    );
  }
}

export default SearchBar;
