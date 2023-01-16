export const state = () => ({
    cart: [],
})

export const mutations = {
    update_state(state, values) {
        Object.keys(values).forEach(key => {
          state[key] = values[key]
        })
    },
    
    push_cart( state, { obj_prod } ) {
        if( ! obj_prod ) return
        state.cart.push(obj_prod)
    },
    
    edit_productQtd( state, { obj_prod_edit } ) {
        const { quantity, id_product } = obj_prod_edit
        const indexProd = state.cart.findIndex((p) => p.id_product === id_product)
        state.cart[indexProd].quantity = +quantity
    },

    removeProd(state, { id_product }) {
        const indexProd = state.cart.findIndex((p) => p.id_product === id_product)
        if (indexProd < 0) return
        state.cart.splice(indexProd, 1)
    }
}

export const actions = {
    action_add_cart( { dispatch, commit, state }, { obj_prod } ) {
        const { cart } = state
        const { id_product, quantity } = obj_prod
        const hasProd = cart.filter((p) => p.id_product === id_product)
        if( hasProd.length < 1 ) {
            commit('push_cart', { obj_prod })
        } else {
            const newQuantity = hasProd[0].quantity + quantity
            const obj_prod_edit = { 
                id_product,
                quantity: newQuantity
            }
            commit('edit_productQtd', { obj_prod_edit })
        }
        dispatch('action_localStorage', {})
    },

    action_remove( { dispatch, commit }, { id_product } ) {
        commit('removeProd', { id_product })
        dispatch('action_localStorage', {})
    },

    action_change_qtd( { dispatch, commit }, { obj_prod_edit } ) {
        commit('edit_productQtd', { obj_prod_edit })
        dispatch('action_localStorage', {})
    },

    action_clean_cart({ dispatch, commit }, {}) {
        commit('update_state', { cart: [] })
        dispatch('action_localStorage', {})
    },

    action_localStorage({ state }, {}) {
        state.cart.length ? localStorage.setItem('cart', JSON.stringify(state.cart)) : localStorage.removeItem('cart')
    }
}