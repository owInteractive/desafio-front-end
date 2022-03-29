import axios from 'axios';

const http = axios.create({
  baseURL: 'https://raw.githubusercontent.com/owInteractive/desafio-frontend-2020/master/'
});

export default {
  product: () => (http.get("produtos.json")),
}