import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nlw03-happy-deploy.herokuapp.com',
});

export default api;
