import Vue from "vue";
import Vuex from "vuex";
import ProductsModel from "@/models/ProductsModel";

Vue.use(Vuex);

function setProductsInLocalStorage(ItemsProductsInCart: Array<ProductsModel>) {
  localStorage.setItem("productsInCart", JSON.stringify(ItemsProductsInCart));
}

export default new Vuex.Store({
  state: {
    productsInCart: Array<ProductsModel>(),
  },

  getters: {
    getProductsInCart: (state) => {
      return state.productsInCart;
    },
    getCountProductsInCart: (state) => {
      let quantity = 0;
      state.productsInCart.map((products) => (quantity += products.quantity));
      return quantity;
    },
  },

  actions: {
    getProductsFromLocalStorage({ commit }) {
      commit("get_ProductsFromLocalStorage");
    },

    addProductInCart({ commit }, payload) {
      commit("add_ProductInCart", payload);
    },

    removeProductInCart({ commit }, payload) {
      commit("remove_ProductInCart", payload);
    },

    removeQuantityProductsInCart({ commit }, payload) {
      commit("remove_QuantityProductsInCart", payload);
    },

    clearProductsInCart({ commit }) {
      commit("clear_ProductsInCart");
    },
  },

  mutations: {
    get_ProductsFromLocalStorage: (state) => {
      const productsInStateFromLocalStorage =
        localStorage.getItem("productsInCart");
      if (productsInStateFromLocalStorage) {
        state.productsInCart = JSON.parse(productsInStateFromLocalStorage);
      }
    },

    add_ProductInCart(state, payload) {
      const product = state.productsInCart.find(
        (filterProduct) => filterProduct.id === payload.id
      );
      if (product) {
        product.quantity++;
      } else {
        state.productsInCart.push({ ...payload, quantity: 1 });
      }
      setProductsInLocalStorage(state.productsInCart);
    },

    remove_ProductInCart(state, payload) {
      state.productsInCart.filter((element) => {
        if (element === payload) {
          delete state.productsInCart[payload];
        }
      });
      setProductsInLocalStorage(state.productsInCart);
    },

    remove_QuantityProductsInCart(state, payload) {
      const product = state.productsInCart.find((i) => i.id === payload.id);

      if (product) {
        if (product.quantity > 1) {
          product.quantity--;
        } else {
          state.productsInCart = state.productsInCart.filter(
            (i) => i.id !== product.id
          );
        }
      }
      setProductsInLocalStorage(state.productsInCart);
    },

    clear_ProductsInCart(state) {
      state.productsInCart = [];
      setProductsInLocalStorage(state.productsInCart);
    },
  },
});
