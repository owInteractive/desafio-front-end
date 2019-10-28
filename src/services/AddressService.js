import {Api} from '@/domain/Service'

export default {
  validateZip (zip) {
    return Api.get('https://viacep.com.br/ws/' + zip + '/json/')
  },
}
