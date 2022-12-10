<template>
  <div class="product">
    <div class="product-img">
      <img :src="product.imageUrl" />
    </div>
    <div class="product-details">
      <p class="product-details-category">{{ product.category }}</p>
      <p class="product-details-name">{{ product.name }}</p>
      <div class="product-details-description">
        <p class="product-details-description-text">
          {{ characterLimiter(product.description, 70) }}<span class="read-more">...</span>          
        </p>        
      </div>
      <p class="product-details-price">{{ brazilianCurrency(product.price) }}</p>
    </div>
    <div v-if="!isInBag(product)" class="product-button product-button-add" @click="addToBag(product)">
      <p class="product-button-text">Adicionar ao carrinho</p>
    </div>
    <div v-else class="product-button product-button-remove" @click="$store.dispatch({type: 'products/removeFromBag', product})">
      <p class="product-button-text">Remover do carrinho</p>
    </div>
  </div>
</template>

<script>
import globalMixins from '@/mixins/globalMixins'

export default {
  name: 'ProductLayout',
  props: ['product'],
  mixins: [globalMixins],
  computed: { 
    getProductsInBag () {
      return this.$store.getters['products/getProductsInBag']
    }    
  },
  methods: {
    addToBag (product) {     
      product.quantity = 1
      this.$store.dispatch({type: 'products/addToBag', product})     
    },
    isInBag (product) {      
      return this.getProductsInBag.find(item => item.id === product.id)
    },
  },
}
</script>

<style scoped lang="sass">
@import "@/assets/sass/variables.sass"
@import "@/assets/sass/mixins.sass"

.product  
  height: 100%
  width: 100%
  display: flex
  flex-direction: column 
  box-shadow: 0 0 20px $grey-shadow-color
  
  .product-img
    width: 100%
    height: 50%
    @include display-direction-justify-align($jus: center, $ali: center) 
   
    img
      max-width: 100%
      max-height: 100%

  .product-details  
    width: 100%
    min-height: 40%
    padding: 5% 10% 5% 5%

    .product-details-category
      font-family: "SourceSansBold", "sans-serif"
      color: $purple-color  

    .product-details-name
      font-family: "SourceSansBold", "sans-serif"
      color: $dark-color
      font-size: 1.1rem

    .product-details-description      
      color: $grey-light-color

      .product-details-description-text

        span
          cursor: pointer

    .product-details-price
      font-family: "SourceSansBold", "sans-serif"
      color: $dark-color
      font-size: 1.2rem

  .product-button
    height: 10%
    @include display-direction-justify-align($jus: center, $ali: center)     
    border-top: 1px solid $grey-light-color
    cursor: pointer    
    font-family: "SourceSansBold", "sans-serif"
    text-transform: uppercase

    .product-button-text      
      margin: 0   

  .product-button-add 
    color: $purple-light-color
  
    &:hover
      background-color: $purple-color
      color: $light-color

  .product-button-remove
    background-color: $red-color
    color: $light-color    

</style>