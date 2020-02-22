import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 0,
    productCart: []
  },
  getters: {
    counter: function(state) {
      return state.counter;
    },

    productCart: function(state) {
      return state.productCart;
    }
  },
  mutations: {
    addProduct: (state, p) => {
      if (state.productCart.indexOf(p) === -1) {
        p.price = parseFloat(p.price.replace(".", "").replace(",", "."));
        let cart = { quantity: 1, totalPerItem: p.price };
        let newArray = { ...p, ...cart };
        state.productCart.push(newArray);
        state.counter++;
      }
    },
    deleteProduct: (state, index) => {
      if (index == "all") {
        state.productCart = [];
        state.counter = 0;
      } else {
        state.productCart.splice(index, 1);
        state.counter--;
      }
    },
    incrementQuantity: function(state, index) {
      var qtd = state.productCart[index].quantity++;
      var valor =
        parseFloat(state.productCart[index].totalPerItem) * parseInt(qtd);
      state.productCart[index].totalPerItem = valor;
    },
    decrementQuantity: (state, index) => {
      state.productCart[index].quantity--;
      var valor =
        parseFloat(state.productCart[index].totalPerItem) *
        parseInt(state.productCart[index].quantity);
      state.productCart[index].totalPerItem = valor;
    }
  },
  actions: {
    addProduct: ({ commit }, product) => {
      commit("addProduct", product);
    },
    incrementQuantity: ({ commit }, product) => {
      commit("incrementQuantity", product);
    },
    decrementQuantity: ({ commit }, product) => {
      commit("decrementQuantity", product);
    },
    deleteProduct: ({ commit }, product) => {
      commit("deleteProduct", product);
    }
  }
});

export { store };
