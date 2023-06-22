import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1/", // Não foi utilizado uma variável vinda do .env pois o projeto é um desafio que será rodado apenas localmente
});

axios.interceptors.response.use((response) => response, (error) => {
  return Promise.reject(error);
});

export default api;
