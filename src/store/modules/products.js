import Vue from 'vue'

export default {
  namespaced: true,
  state: {   
    productsInBag: JSON.parse(localStorage.getItem("productsInBag")) || []
  },  
  mutations: {     
    ADD_TO_BAG(state, product) {
      state.productsInBag.push(product);
      localStorage.setItem("productsInBag", JSON.stringify(state.productsInBag))
    },
    REMOVE_FROM_BAG(state, productId) {
      let updatedBag = state.productsInBag.filter(item => productId != item.id)
      state.productsInBag = updatedBag
      localStorage.setItem("productsInBag", JSON.stringify(state.productsInBag));   
    },
    DECREASE_PRODUCT(state, product) {     
      let itemIndex = state.productsInBag.findIndex(item => item.id === product.id)
      product.quantity--
      Vue.set(state.productsInBag, itemIndex, product)
    },
    INCREASE_PRODUCT(state, product) {    
      let itemIndex = state.productsInBag.findIndex(item => item.id === product.id)
      product.quantity++
      Vue.set(state.productsInBag, itemIndex, product)     
    },
    CLEAR_BAG(state) {
      state.productsInBag = []
      localStorage.clear()
    }  
  },
  actions: {
    addToBag ({ commit }, payload) {          
      commit('ADD_TO_BAG', payload.product)
    },
    removeFromBag ({ commit }, payload) {      
      commit('REMOVE_FROM_BAG', payload.product.id)          
    },
    decreaseProduct ({ commit }, payload) {
      commit('DECREASE_PRODUCT', payload.product)
    },
    increaseProduct ({ commit }, payload) {
      commit('INCREASE_PRODUCT', payload.product)
    },
    clearBag ({ commit }) {
      commit('CLEAR_BAG')      
    }
  },
  getters: {
    getProductsInBag(state) {
        return state.productsInBag
    },   
  } 
}