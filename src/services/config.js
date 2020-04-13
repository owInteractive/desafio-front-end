import axios from 'axios';

export const productsData = axios.create({
  baseURL: 'https://api.myjson.com/bins/9e9fl'
});

export const cepApi = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
});