import axios from 'axios';

const apiKey = 'f740feb9';
const baseURL = `https://www.omdbapi.com/?apikey=${apiKey}`;

const api = axios.create({
  baseURL,
  responseType: 'json',
});

export default api;
