import { http } from "./config";

export default {
  findCep: cep => {
    return http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
};
