export const state = () => ({
    loading: false,
})

export const mutations = {
    update_state(state, values) {
      Object.keys(values).forEach(key => {
        state[key] = values[key]
      })
    }
}
export const actions = {
    async get_products({ commit }, {}) {
        const baseUrl = 'https://raw.githubusercontent.com/owInteractive/desafio-frontend-2020/master/produtos.json'
        commit('update_state', { loading: true })
        let products = null;
        await fetch(`${baseUrl}`)
            .then((r) => r.json())
            .then(p => {
                commit('update_state', { loading: false })
                products = p
            })
            .catch( _ => {
                commit('update_state', { loading: false })
                return 'Ops. Deu erro ao requisitar os posts.'
            })
        return products
    },
    

}