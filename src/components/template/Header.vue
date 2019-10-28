<template>
    <div class="header">
        <div class="box">
            <div class="container-center">
                <router-link :to="{ name: 'home' }" tag="p" id="logo">
                    <img alt="Vue logo" class="img-fluid" src="@/assets/logo.png">
                </router-link>
            </div>
        </div>
        <div class="box">
            <div class="container-center">
                <router-link :to="{ name: 'products' }" tag="p" id="products">
                    <a>Produtos</a>
                </router-link>
            </div>
        </div>
        <div class="box">
            <div class="container-center">
                <div class="cart">
                    <router-link :to="{ name: 'shoppingCart' }" tag="p" id="shoppingCart">
                        <a>
                            <img alt="Cart" src="/img/icons/shopping-cart.svg" width="30" height="30">
                            <sup><p class="ellipse"><span>{{cartProducts.length}}</span></p></sup>
                        </a>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'Header',
    computed: {
      ...mapGetters({cartProducts: 'getProductsCart'}),
    }
  }
</script>
