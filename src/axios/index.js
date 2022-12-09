import axios from "axios";

export default {
  listProduct: () => {
    return axios.get("https://raw.githubusercontent.com/owInteractive/desafio-frontend-2020/master/produtos.json")
  },
  listCep: (cep) => {
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
  },
}