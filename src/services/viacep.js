import axios from 'axios';

const http = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
});

export default {
  getCep: (cep) => (http.get(`${cep}/json`)),
}