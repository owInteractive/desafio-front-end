import apiProdutos from '@/services/apiProdutos';

const state = {
  products: []
};

const getters = {};

const actions = {
  getAllProducts({ commit }) {
    apiProdutos.get().then(response => {
      commit('GET_PRODUCTS_MUTATION', response.data);
    });
  },
  deleteProducts(context) {
    context.commit('GET_PRODUCTS_MUTATION', []);
  }
};

const mutations = {
  GET_PRODUCTS_MUTATION(state, products) {
    state.products = products;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
