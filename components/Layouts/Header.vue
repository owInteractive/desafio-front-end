<template lang="pug">
    header.header
        div.container
            button.header__toogle-menu(@click="menu_mobile = true")
                span.i-line
                span.i-line
                span.i-line

            a.header__logo(href="/" title="MKT Place")
                img(:src="logo" alt="MKT Place")

            nav.header__nav(v-if="menu")
                router-link(
                    v-for="link in menu"
                    :to="link.href"
                    v-bind:key="`desktop ${link.href}`"
                    class="header__nav-item"
                ) {{ link.text }}

            .header__cart
                router-link.header__cart-link(to="/cart")
                    img.header__cart-icon(:src="cart" alt="Carrinho")
                    span.header__cart-count {{ cart_quantity }}

            div.menu-nav-mobile(:class="menu_mobile ? '-opened' : ''")
                button.menu-nav-mobile__btn-close(@click="menu_mobile = false")
                    span

                .menu-nav-mobile__inner
                    .menu-header-container
                        ul.menu-nav-mobile__menu
                            li.menu-item(
                                v-for="link in menu"
                                v-bind:key="`mobile ${link.href}`"
                            )
                                router-link(:to="link.href") {{ link.text }}
                    


</template>

<script>
import SearchForm from '@/components/SearchForm'

export default {
    name: 'Header',
    components: {
        SearchForm
    },
    data() {
        return {
            logo: require('@/assets/img/logo.jpg'),
            cart: require('@/assets/img/cart.jpg'),
            menu_mobile: false,
            menu:  [
                { text: 'Produtos', href: '/' }
            ],
        }
    },
    computed: {
        cart_quantity() {
            const cart = this.$store.state.cart.cart
            const cart_quantity = cart.map( p => p.quantity )
            return cart.length > 0 ? cart_quantity.reduce( ( total, quantity) => total + quantity ) : 0
        }
    }
}
</script>