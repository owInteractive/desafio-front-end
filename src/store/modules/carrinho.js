const state = {
    productsCart: []
  };
  
  const getters = {
    cartProductsQtd(state) {
      let qtdProducts = 0;
      state.productsCart.forEach(item => {
        qtdProducts += item.quantity;
      });
      return qtdProducts;
    },
    totalPrice(state) {
      let total = 0;
      state.productsCart.forEach(item => {
        total += parseFloat(item.price) * parseInt(item.quantity);
      });
  
      return total;
    }
  };
  
  const actions = {
    addProductToCart({ commit }, { product, quantity }) {
      const productCart = { ...product, quantity };
      commit('ADD_TO_CART', productCart);
    },
  
    incrementProductQtd({ commit }, product) {
      commit('INCREMENT_PROD_QTD', product);
    },
    decrementProductQtd({ commit }, product) {
      commit('DECREMENT_PROD_QTD', product);
    },
  
    removeProductFromCart({ commit }, product) {
      commit('REMOVE_FROM_CART', product);
    },
    clearShoppingCart({ commit }) {
      commit('CLEAR_CART');
    }
  };
  
  const mutations = {
    ADD_TO_CART(state, productCart) {
      let productInCart = state.productsCart.find(item => {
        return item.name === productCart.name;
      });
  
      if (productInCart) {
        return productInCart.quantity++;
      } else {
        state.productsCart.push(productCart);
      }
    },
    INCREMENT_PROD_QTD(state, product) {
      return state.productsCart[product].quantity++;
    },
    DECREMENT_PROD_QTD(state, product) {
      if (state.productsCart[product].quantity == 0) {
        return;
      } else {
        return state.productsCart[product].quantity--;
      }
    },
  
    REMOVE_FROM_CART(state, product) {
      return state.productsCart.splice(product, 1);
    },
    CLEAR_CART(state) {
      return (state.productsCart = []);
    }
  };
  
  export default {
    state,
    getters,
    actions,
    mutations
  };
  