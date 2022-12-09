<template>
  <div class="cart container-fluid">    
    <div class="cart-item-header row">
      <div class="col cart-item-header-description"></div>
      <div class="col cart-item-header-description">
        <p>Produtos</p>
      </div>
      <div class="col cart-item-header-description">
        <p>Quantidade</p>
      </div>
      <div class="col cart-item-header-description">
        <p>Valor Unitário</p>
      </div>
      <div class="col cart-item-header-description">
        <p>Total</p>
      </div>     
    </div>
    <div class="cart-item-products row" v-for="product in getProductsInBag" :key="product.id">
      <div class="col cart-item-products-description">
        <span @click="removeFromBag(product)">
          <GarbageIcon />
        </span>
      </div>
      <div class="col cart-item-products-description cart-item-products-description-col-2">
        <p>{{ product.category }}</p>
        <p>{{ product.name }}</p>
      </div>
      <div class="col cart-item-products-description">
        <button @click="() => $store.dispatch({type: 'products/decreaseProduct', product})">-</button>
          <span class="quantity">{{ product.quantity }}</span>
        <button @click="() => $store.dispatch({type: 'products/increaseProduct', product})">+</button>
      </div>
      <div class="col cart-item-products-description">
        <p>
          <span class="value-description">{{ brazilianCurrency(product.price) }}</span> à vista ou 10x {{ divideValue(product.price) }}
        </p>
      </div>
      <div class="col cart-item-products-description">
        <p>
          <span class="value-description">{{ brazilianCurrency(product.price * product.quantity) }}</span> à vista ou 10x {{ divideValue(product.price * product.quantity) }}
        </p>
      </div>
    </div>
    <div class="cart-item-total row">
      <div class="col-lg-2 offset-lg-8 cart-item-total-description">
        <p class="cart-item-total-description-text">Total à vista</p>
      </div>
      <div class="col-lg-2 cart-item-total-description">
        <p class="cart-item-total-description-value">{{ brazilianCurrency(this.orderTotal()) }}</p>
      </div>
    </div>
    <div class="cart-item-instalment row">
      <div class="col-lg-2 offset-lg-8 cart-item-instalment-description">
        <p class="cart-item-instalment-description-text">Total Parcelado</p>
      </div>
      <div class="col-lg-2 cart-item-instalment-description">
        <p class="cart-item-instalment-description-value">em até 
        <span class="cart-item-instalment-description-value-detailed">10x {{ divideValue(this.orderTotal()) }}</span> 
        (Total {{ brazilianCurrency(this.orderTotal()) }})
        </p>
      </div>
    </div>
    <div class="cart-item-actions row">
      <div class="col-lg-3 cart-item-actions-clear">
        <span @click="() => clearBag()">
          <GarbageIcon /> Limpar carrinho
        </span>       
      </div>
      <div class="col-lg-3 offset-lg-3 cart-item-actions-buymore">
        <button @click="() => this.$router.push({ name: 'home' })">Continuar comprando</button>
      </div>
      <div class="col-lg-3 cart-item-actions-buy">
        <button>Concluir compra</button>
      </div>
    </div>
  </div>
</template>

<script>
import GarbageIcon from '@/components/icons/GarbageIcon'
import globalMixin from '@/mixins/globalMixins'
import { mapGetters } from 'vuex'

export default {
  name: 'CartView',
  components: { GarbageIcon },
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
      this.$store.dispatch({type: 'products/clearBag'})
    }
  },
  mounted () {
    console.log(this.getProductsInBag)    
  }
}
</script>

<style scoped lang="sass">
@import "@/assets/sass/variables.sass"
@import "@/assets/sass/mixins.sass"

.cart
  margin-top: 5%
  width: 60%
  min-height: 80%
  display: flex
  flex-direction: column
  align-items: center

  .cart-item-header    
    min-height: 5%
    width: 100%    
    border-bottom: 1px solid $dark-color
    display: flex    
    
    p
      font-family: 'SourceSansBold', "sans-serif"
      text-transform: uppercase     

  .cart-item-products
    min-height: 12%
    width: 100%
    border-bottom: 1px solid $dark-color
    display: flex
    justify-content: center
    align-items: center  
    

    .cart-item-products-description
      display: flex

      span
        cursor: pointer
        
        svg
          width: 18px 
          height: 18px         

      button       
        width: 20px
        height: 27px       
        display: flex
        justify-content: center
        align-items: center
        cursor: pointer
        font-size: 1.1rem
        border: 1px solid $grey-light-color
        background-color: $light-color

      .quantity
        display: flex
        justify-content: center
        align-items: center
        width: 40px
        height: 27px       
        border: 1px solid $grey-light-color
        font-family: 'SourceSansBold', "sans-serif"

      p
      margin: 0    
      padding: 0

      .value-description
        font-family: 'SourceSansBold', "sans-serif"

    .cart-item-products-description-col-2      
      flex-direction: column

      p
        margin: 0    
        padding: 0
        font-family: 'SourceSansBold', "sans-serif"

      p:first-child
        color: $purple-color
        font-size: 0.9rem        
      
      p:last-child
        font-size: 1.1rem

  .cart-item-total    
    min-height: 10%
    width: 100%   
    display: flex     

    .cart-item-total-description
      display: flex
      justify-content: flex-end
      align-items: center 

      p
        font-family: 'SourceSansBold', "sans-serif"
        text-transform: uppercase
        padding: 0
        margin: 0

      .cart-item-total-description-text
        font-size: 1.1rem

      .cart-item-total-description-value
        font-size: 1.5rem
        color: $purple-color
  
  .cart-item-instalment    
    min-height: 10%
    width: 100%   
    display: flex
    border-bottom: 1px solid $dark-color  

    .cart-item-instalment-description
      right: 0
      display: flex
      justify-content: flex-end
      align-items: center
      
      .cart-item-instalment-description-text
        font-family: 'SourceSansBold', "sans-serif"   
        text-transform: uppercase
        font-size: 1.1rem

      .cart-item-instalment-description-value
        margin-left: 50px

        .cart-item-instalment-description-value-detailed
          font-family: 'SourceSansBold', "sans-serif"

  .cart-item-actions   
    min-height: 12%
    width: 100%
    display: flex
    

    .cart-item-actions-clear   
      padding: 0  
      display: flex      
      align-items: center

      span
        cursor: pointer
        
        svg
          width: 18px 
          height: 18px        
    
    .cart-item-actions-buymore
      padding: 0 1% 0 0
      display: flex
      justify-content: center
      align-items: center
      
      button
        padding: 5%
        width: 100%
        border: none
        background-color: $grey-light-color
        color: $dark-color
        font-family: 'SourceSansBold', "sans-serif"

    .cart-item-actions-buy
      padding: 0 0 0 1%
      display: flex
      justify-content: center
      align-items: center

      button
        padding: 5%
        width: 100%
        border: none
        background-color: $purple-color
        color: $light-color
        font-family: 'SourceSansBold', "sans-serif"
</style>