import axios from 'axios';

const API_URL = 'https://api-airbnb-node.herokuapp.com/api';

const get = (path) => {
  return axios.get(`${API_URL}/${path}`);
};

const post = (path, data) => {
  return axios.post(`${API_URL}/${path}`, data);
};

const put = (path, data) => {
  return axios.put(`${API_URL}/${path}`, data);
};

export { get, post, put };
