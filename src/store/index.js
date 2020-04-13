import Vue from 'vue';
import Vuex from 'vuex';
import produtos from './modules/produtos';
import carrinho from './modules/carrinho';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage
});

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  modules: {
    carrinho,
    produtos
  }
});