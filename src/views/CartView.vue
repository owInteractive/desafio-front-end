<template>
  <div v-if="getProductsInBag.length > 0" class="cart container">    
    <div class="cart-table row">
      <table class="cart-table-item">
        <CartHeaderLayout />
        <CartContentLayout :getProductsInBag="getProductsInBag" />
      </table>
    </div>
    <div class="cart-total row">      
      <div class="col-lg-3 offset-lg-6 cart-total-description">
        <p class="cart-total-description-text">Total à vista</p>
      </div>
      <div class="col-lg-3 cart-total-description">
        <p class="cart-total-description-value">{{ brazilianCurrency(this.orderTotal()) }}</p>
      </div>
    </div>
    <div class="cart-instalment row">
      <div class="col-lg-3 offset-lg-6 cart-instalment-description">
        <p class="cart-instalment-description-text">Total Parcelado</p>
      </div>
      <div class="col-lg-3 cart-instalment-description">
        <p class="cart-instalment-description-value">em até 
        <span class="cart-instalment-description-value-detailed">10x {{ divideValue(this.orderTotal()) }}</span> 
        (Total {{ brazilianCurrency(this.orderTotal()) }})
        </p>
      </div>
    </div>  
    <div class="cart-actions row">
      <div class="col-sm-12 col-lg-3 cart-actions-clear">
        <span @click="() => clearBag()">
          <GarbageIcon /> Limpar carrinho
        </span>       
      </div>
      <div class="col-sm-12 col-lg-3 offset-lg-3 cart-actions-buymore">
        <button @click="() => this.$router.push({ name: 'home' })">Continuar comprando</button>
      </div>
      <div class="col-sm-12 col-lg-3 cart-actions-buy">
        <button @click="() => this.$router.push({ name: 'checkout' })">Concluir compra</button>
      </div>
    </div>  
  </div> 
  <div v-else class="cart-empty container-fluid">
    <div class="cart-empty-item row">
      <div class="col-lg-4 offset-lg-4">
        <p>Seu carrinho está vazio</p>
        <router-link to="/">Voltar para home</router-link>
      </div>  
    </div>
  </div>
</template>

<script>
import CartHeaderLayout from '@/components/cart/CartHeaderLayout.vue'
import CartContentLayout from '@/components/cart/CartContentLayout.vue'
import GarbageIcon from '@/components/icons/GarbageIcon'
import globalMixin from '@/mixins/globalMixins'
import { mapGetters } from 'vuex'

export default {
  name: 'CartView',
  components: { CartHeaderLayout, CartContentLayout, GarbageIcon },
  mixins: [globalMixin], 
  computed: {    
    ...mapGetters("products", ["getProductsInBag"]),
  },
  methods: {
    orderTotal () {
      let total = 0
      this.getProductsInBag.forEach(item => {
        total += item.price * item.quantity
      })
      return total
    },
    removeFromBag (product) {
      this.$store.dispatch({type: 'products/removeFromBag', product})
    },
    clearBag () {   
      if (!confirm('Tem certeza que deseja remover todos os items do carrinho ?'))
        return 

      this.$store.dispatch({type: 'products/clearBag'})
    }
  }
}
</script>

<style scoped lang="sass">
@import "@/assets/sass/variables.sass"
@import "@/assets/sass/mixins.sass"

.cart  
  width: 100%
  min-height: 80%
  @include display-direction-justify-align($dir: column, $ali: center, $jus: center)

  @include media-md()
    padding-top: 2%   

  @include media-lg()
    padding-top: 2% 

  @include media-xl()
    padding-top: 2%
  
  .cart-table
    width: 100%

    .cart-table-item
      width: 100%     
      @include display-direction-justify-align($dir: column)

      @include media-medium-table()
        display: inline 

  .cart-total
    width: 100%
    display: flex  
    padding-top: 2%
    padding-bottom: 1%      

    .cart-total-description     
      @include display-direction-justify-align($jus: flex-end, $ali: center)

      p
        font-family: 'SourceSansBold', "sans-serif"
        text-transform: uppercase
        padding: 0
        margin: 0

      .cart-total-description-text
        font-size: 1.1rem

      .cart-total-description-value
        font-size: 1.5rem
        color: $purple-color
  
  .cart-instalment
    width: 100%
    display: flex
    border-bottom: 1px solid $dark-color
    padding-top: 1%
    padding-bottom: 2% 

    .cart-instalment-description
      right: 0
      @include display-direction-justify-align($jus: flex-end, $ali: center)
          
      .cart-instalment-description-text
        font-family: 'SourceSansBold', "sans-serif"   
        text-transform: uppercase
        font-size: 1.1rem

      .cart-instalment-description-value
        margin-left: 50px

        .cart-instalment-description-value-detailed
          font-family: 'SourceSansBold', "sans-serif"

  .cart-actions   
    padding-top: 2%
    padding-bottom: 2%
    width: 100%
    display: flex    

    .cart-actions-clear   
      padding: 0
      @include display-direction-justify-align($ali: center)
      
      span
        cursor: pointer
        
        svg
          width: 18px 
          height: 18px        
    
    .cart-actions-buymore
      padding: 0 1% 0 0
      @include display-direction-justify-align($jus: center, $ali: center)
            
      button
        padding: 5%
        width: 100%
        border: none
        background-color: $grey-light-color
        color: $dark-color
        font-family: 'SourceSansBold', "sans-serif"
        border-radius: 4px

        &:hover
          background-color: $grey-shadow-color
          
    .cart-actions-buy
      padding: 0 0 0 1%
      @include display-direction-justify-align($jus: center, $ali: center)      
      
      button
        padding: 5%
        width: 100%
        border: none
        background-color: $purple-color
        color: $light-color
        font-family: 'SourceSansBold', "sans-serif"
        border-radius: 4px

        &:hover
          background-color: $purple-light-color

    .cart-actions-buymore, .cart-actions-buy
      @include media-md()
        padding: 0
        margin-top: 2%

      @include media-sm()
        padding: 0
        margin-top: 2%  

      @include media-xs()
        padding: 0
        margin-top: 2%    

.cart-empty    
  width: 100%
  min-height: 80%
  @include display-direction-justify-align($jus: center, $ali: center)

  .cart-empty-item
    width: 100%
    text-align: center

    a
      text-decoration: none
      font-family: 'SourceSansBold', "sans-serif"

</style>