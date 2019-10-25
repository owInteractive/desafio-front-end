export default {
  actionProducts (context) {
    context.commit('GET_PRODUCTS', context.state.products)
  },
  actionClearCart (context) {
    context.commit('GET_PRODUCTS', [])
  }
}
