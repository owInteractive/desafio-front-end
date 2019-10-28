export default {
  actionProductsCart (context) {
    context.commit('GET_PRODUCTS_CART', context.state.products)
  },
  actionClearCart (context) {
    context.commit('GET_PRODUCTS_CART', [])
  }
}
