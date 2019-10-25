export default {
  actionProducts (context) {
    context.commit('GET_PRODUCTS', context.state.products)
  },
  actionClearProducts (context) {
    context.commit('GET_PRODUCTS', [])
  }
}
