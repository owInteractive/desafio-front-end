export default {
  namespaced: true,
  state: {
    productsInBag: []
  },
  mutations: {     
    ADD_TO_BAG(state, product) {
      state.productsInBag.push(product);
      localStorage.setItem("productsInBag", JSON.stringify(state.productsInBag))
    },      
  },
  actions: {
    addToBag ({ commit }, product) {       
      commit('ADD_TO_BAG', product)
    },
  }    
}