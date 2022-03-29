import { createStore } from "vuex";

function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export default createStore({
  state: {
    cart: [],
  },
  getters: {
    quantityProductInCart: (state) => {
      let quantity = 0;
      state.cart.map((product) => quantity += product.quantity);

      return quantity;
    },
    cartItems: (state) => {
      return state.cart
    }
  },
  mutations: {
    addToCart(state, product) {
      let item = state.cart.find(i => i.id === product.id)

      if (item) {
        item.quantity++
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }

      updateLocalStorage(state.cart)
    },
    removeFromCart(state, product) {
      let item = state.cart.find(i => i.id === product.id)

      if (item) {
        state.cart = state.cart.filter(i => i.id !== product.id)
      }

      updateLocalStorage(state.cart)
    },
    removeQuantityFromCart(state, product) {
      let item = state.cart.find(i => i.id === product.id)

      if (item) {
        if (item.quantity > 1) {
          item.quantity--
        } else {
          state.cart = state.cart.filter(i => i.id !== product.id)
        }
      }

      updateLocalStorage(state.cart)
    },
    clearCart(state) {
      state.cart = [];
      updateLocalStorage(state.cart);
    },
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem('cart')
      if (cart) {
        state.cart = JSON.parse(cart)
      }
    }
  },
  actions: {},
  modules: {}
})