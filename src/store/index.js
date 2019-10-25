import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
export default new Vuex.Store({
  plugins: [createPersistedState({storage: window.localStorage})],
  modules: {
    cart,
  }
})
