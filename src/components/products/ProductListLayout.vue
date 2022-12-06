<template>
  <div class="container-fluid product-list">
    <div class="product-list-item-search">
        <p class="product-list-item-search-label">Encontre seu produto</p>
        <div class="product-list-item-search-field">
          <input type="text" placeholder="Pesquisar..." v-model="searchField" />
          <button @click="() => searchProduct()">
            <BIconSearch />
          </button>          
        </div>
    </div>
      
    <div class="row product-list-item-products">
      <div class="col-lg-4 product-list-item-col" v-for="product in products" :key="product.id">
        <ProductLayout :product="product" />
      </div>
    </div>   
  </div>
</template>

<script>
import ProductLayout from '@/components/products/ProductLayout.vue'
import { BIconSearch } from 'bootstrap-vue'

export default {
  name: 'ProductListLayout',
  components: { ProductLayout, BIconSearch },
  data () {
    return {
      products: null,
      originalProducts: null,
      searchField: '',
    }
  },
  methods: {
    async getProducts () {
      await this.$http.get()
      .then(response => {
        this.products = response.data
        this.originalProducts = response.data
        console.log(this.products)
        console.log(this.originalProducts)
      })
      .catch(error => {
        console.log(error)
      })
    },
    searchProduct () {
      if (this.searchField.trim() === "") {
        this.products = this.originalProducts
        return
      }
      
      let obj = this.originalProducts.filter(item => {
        let arr = item.name.trim().toLowerCase().split(' ')        
        return arr.includes(this.searchField.trim().toLowerCase()) || item.name.trim().toLowerCase() === this.searchField.trim().toLowerCase()
      })      
      this.products = obj     
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

  .product-list-item-search   
    margin-top: 2%
    width: 100%
    min-height: 10%
    display: flex
    justify-content: center
    align-items: center
    box-shadow: 0 0 20px $grey-shadow-color

    .product-list-item-search-label
      width: 20%     
      margin: 0
      font-family: 'SourceSansBold', "sans-serif"
      color: $grey-light-color

    .product-list-item-search-field
      width: 70%
      height: 100%    
      display: flex
      justify-content: center
      align-items: center
      
      input
        width: 95%
        height: 50%
        padding: 1%

      button
        margin-left: -2px
        background-color: $purple-color
        width: 5%
        height: 50%
        cursor: pointer    

        svg
          font-size: 1.4rem
          color: $light-color

  .product-list-item-products   
    width: 100%
    display: flex    
    justify-content: space-between
      
    .product-list-item-col
      width: 32.5%    
      padding-left: 0%
      padding-right: 0%     
      margin-top: 3%    
       
</style>