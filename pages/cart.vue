<template lang="pug">
    LayoutDefault
        main.container
            section.page-section
                ListCart(:cart="cart" v-if="cart.length")
                EmptyCart(v-else)
            


</template>

<script>
import LayoutDefault from '@/components/Layouts/LayoutDefault'
import ListCart from '@/components/ListCart/ListCart'
import EmptyCart from '@/components/ListCart/EmptyCart'

export default {
    name: 'Cart',
    components: {
        LayoutDefault,
        ListCart,
        EmptyCart,
    },
    data(){
        return {
        }
    },
    methods: {
    },
    created() {
    },
    computed: {
        cart() {
            return this.$store.state.cart.cart
        },
    }
}
</script>