<template>
    <header id="header">
        <div class="hdcontent">
            <span class="logo">
                <strong class="logo-mkt">Mkt</strong>
                <strong class="logo-place">Place</strong>
            </span>
            <div class="hdcart">
                <router-link to="/" class="product">Produtos</router-link>
                <router-link to="/carrinho">
                   <img src="../assets/images/shopping-cart.svg" alt="Carrinho de Compras" />
                </router-link>
                <div class="quantidade"><span class="carrinho">{{ prodCartQtd }}</span></div>
            </div>
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'Header',
    computed: {
        ...mapGetters(['prodCartQtd'])
    }
};
</script>