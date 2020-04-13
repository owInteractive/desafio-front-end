import { productsData } from './config';

export default {
  get() {
    return productsData.get('');
  }
};
