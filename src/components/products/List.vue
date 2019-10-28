<template>
    <section class="flex-list">
        <div class="box-product" :key="index" v-for="(product, index) in products">
            <div class="bg-img">
                <img :src="product.picture">
            </div>
            <p class="sub-title-product" align="left">Eletrônicos</p>
            <p class="text-product" align="left">{{product.name.substring(0,50)}}</p>
            <p class="text-description" align="left">Lorem ipsum dolor sit amet, cons ctetur adipiscing elit. Etiam pell
                sit amet, cons </p>
            <p class="text-price-product" align="left">R$ {{product.price}}</p>
            <button class="btn-light" @click="addProductCart(product)">Adicionar ao carrinho</button>
        </div>
    </section>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'List',
    props: {
      products: {
        required: true,
        default: []
      }
    },
    computed: {
      ...mapGetters({
        cartProducts: 'getProductsCart',
      }),
    },
    methods: {
      addProductCart (product) {
        if (this.cartProducts.filter(e => e.name === product.name).length > 0) {
          this.$toastr.info('Produto já se encontra no carrinho.')
        } else {
          const productCart = {...product, amount: 1, total: product.price}
          this.cartProducts.push(productCart)
          this.$store.commit('GET_PRODUCTS_CART', this.cartProducts)
          this.$toastr.success('Produto adicionado ao carrinho.')
        }
      },
    }
  }
</script>
