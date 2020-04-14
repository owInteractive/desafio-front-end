import { cepApi } from './config';

export default {
  cepValidation(code) {
    return cepApi.get('' + code + '/json/');
  }
};
