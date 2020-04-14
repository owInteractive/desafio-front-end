import axios from 'axios';

// export const productsData = axios.create({
// baseURL: 'http://localhost:3000/produtos'
// });

export const cepApi = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
});