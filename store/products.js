export const state = () => ({
    products: [],
})

export const mutations = {
    update_state(state, values) {
        Object.keys(values).forEach(key => {
          state[key] = values[key]
        })
    },
}

export const actions = {
    async request_products({ dispatch, commit }, {}) {
        const products = await dispatch( 'api/get_products', {}, { root: true });
        if(!products) return false;
        commit( 'update_state', { products } )
    }
}