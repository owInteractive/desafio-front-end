<template>
  <div class="container-fluid product-list">       
    <div class="row product-list-item">
      <div class="col-lg-4 product-list-item-col" v-for="product in products" :key="product.id">
        <ProductLayout :product="product" />
      </div>
    </div>   
  </div>
</template>

<script>
import ProductLayout from '@/components/products/ProductLayout.vue'

export default {
  name: 'ProductListLayout',
  components: { ProductLayout },
  data () {
    return {
      products: null,
    }
  },
  methods: {
    async getProducts () {
      await this.$http.get()
      .then(response => {
        this.products = response.data
        console.log(this.products)
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style scoped lang="sass">
@import "@/assets/sass/variables.sass"
@import "@/assets/sass/mixins.sass"

.product-list
  width: 60%
  height: 100%
  display: flex
  flex-direction: column
  align-items: center

  .product-list-item
    width: 100%

    .product-list-item-search
      display: flex
      
    .product-list-item-col
      margin-top: 3%
       
</style>