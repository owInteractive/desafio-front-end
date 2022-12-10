<template>
  <div class="container-fluid product-list">
    <div class="product-list-item-search">
        <p class="product-list-item-search-label">Encontre seu produto</p>
        <div class="product-list-item-search-field">
          <input type="text" placeholder="Pesquisar..." v-model="searchField" />
          <button @click="() => searchProduct()">
            <SearchIcon />
          </button>          
        </div>
    </div>
    <div v-if="loading" class="loading">
      <img src="@/assets/images/loading.gif">
    </div>      
    <div v-if="products.length > 0" class="row product-list-item-products">
      <div class="col-lg-4 product-list-item-col" v-for="product in products" :key="product.id">
        <ProductLayout :product="product" />
      </div>      
    </div>
    <div v-else class="row product-list-item-no-products">
      <div class="col-lg-4 product-list-item-no-products-col">
        <p>Não há produtos com o termo buscado</p>
      </div>      
    </div>     
  </div>
</template>

<script>
import ProductLayout from '@/components/products/ProductLayout.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'

export default {
  name: 'ProductListLayout',
  components: { ProductLayout, SearchIcon },
  data () {
    return {
      products: [],
      originalProducts: null,
      searchField: '',
      loading: false,
    }
  },
  methods: {
    async getProducts () {
      this.loading = true
      await this.$http.listProduct()
      .then(response => {
        this.products = response.data
        this.originalProducts = response.data
        console.log(this.products)
        console.log(this.originalProducts)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        this.loading = false
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
  min-height: 100%
  @include display-direction-justify-align($dir: column, $ali: center) 
 
  .product-list-item-search   
    margin-top: 2%
    width: 100%
    min-height: 10%
    @include display-direction-justify-align($jus: center, $ali: center)     
    box-shadow: 0 0 20px $grey-shadow-color

    .product-list-item-search-label
      width: 20%     
      margin: 0
      font-family: 'SourceSansBold', "sans-serif"
      color: $grey-light-color

    .product-list-item-search-field
      width: 70%
      height: 100%
      @include display-direction-justify-align($dis: flex, $jus: center, $ali: center)     
      
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
          width: 24px          
          color: $light-color

  .product-list-item-products   
    width: 100%
    display: flex    
    justify-content: space-between
      
    .product-list-item-col        
      padding-left: 0%
      padding-right: 0%     
      margin-top: 3%
    
  .loading
    height: 100vh
    width: 100vw    
   
    @include display-direction-justify-align($jus: center, $ali: center)   

    img
      width: 50px
      height: 50px  

  .product-list-item-no-products
    width: 100%
    @include display-direction-justify-align($jus: center, $ali: center) 
   
    .product-list-item-no-products-col
      padding-left: 0%
      padding-right: 0%     
      margin-top: 3%
       
</style>