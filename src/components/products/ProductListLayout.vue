<template>
  <div class="container product-list">
    <div class="product-list-item-search row">
        <p class="product-list-item-search-label col-5 col-sm-4 col-md-4 col-lg-3 offset-lg-1">Encontre seu produto</p>
        <div class="product-list-item-search-field col-7 col-sm-8 col-md-8 col-lg-8 ">
          <input type="text" placeholder="Pesquisar..." v-model="searchField" />
          <button @click="() => searchProduct()">
            <SearchIcon />
          </button>          
        </div>
    </div>       
    <div v-if="products.length > 0" class="row product-list-item-products">      
      <ProductLayout class="col-sm-12 col-md-6 col-lg-4" v-for="product in products" :key="product.id" :product="product" />          
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
    }
  },
  methods: {
    async getProducts () {     
      await this.$http.listProduct()
      .then(response => {
        this.products = response.data
        this.originalProducts = response.data       
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
  margin-bottom: 2%
  width: 100%
  min-height: 100%
  @include display-direction-justify-align($dir: column, $ali: center) 
 
  .product-list-item-search   
    padding-top: 1%
    padding-bottom: 1%
    margin-top: 2%
    width: 100%    
    @include display-direction-justify-align($jus: center, $ali: center)     
    box-shadow: 0 0 20px $grey-shadow-color

    @include media-xs()
      margin-top: 4%
      margin-bottom: 4%

    .product-list-item-search-label          
      margin: 0
      font-family: 'SourceSansBold', "sans-serif"
      color: $grey-light-color

      @include media-xs()
        font-size: 0.8rem

      @include media-sm()
        font-size: 0.8rem

    .product-list-item-search-field     
      height: 100%
      @include display-direction-justify-align($dis: flex, $jus: center, $ali: center)     
      
      input
        width: 90%       
        padding: 0.5%

      button
        margin-left: -1px      
        padding: 0.45%
        background-color: $purple-color               
        cursor: pointer    

        svg
          width: 22px          
          color: $light-color

  .product-list-item-products    
    width: 100% 

    @include display-direction-justify-align($jus: space-between, $ali: center)    

  .product-list-item-no-products
    width: 100%
    @include display-direction-justify-align($jus: center, $ali: center) 
   
    .product-list-item-no-products-col
      padding-left: 0%
      padding-right: 0%     
      margin-top: 3%
       
</style>