<template>
  <div class="cart-products row">
    <div class="col cart-products-description">
      <span @click="removeFromBag(product)">
        <GarbageIcon />
      </span>
    </div>
    <div class="col cart-products-description cart-products-description-col-2">
      <p>{{ product.category }}</p>
      <p>{{ product.name }}</p>
    </div>
    <div class="col cart-products-description">
      <button :disabled="product.quantity <= 1" @click="() => $store.dispatch({type: 'products/decreaseProduct', product})">-</button>
      <span class="quantity">{{ product.quantity }}</span>
      <button @click="() => $store.dispatch({type: 'products/increaseProduct', product})">+</button>
    </div>
    <div class="col cart-products-description">
      <p>
        <span class="value-description">{{ brazilianCurrency(product.price) }}</span> à vista ou 10x {{ divideValue(product.price) }}
      </p>
    </div>
    <div class="col cart-products-description">
      <p>
        <span class="value-description">{{ brazilianCurrency(product.price * product.quantity) }}</span> à vista ou 10x {{ divideValue(product.price * product.quantity) }}
      </p>
    </div>
  </div>
</template>

<script>
import globalMixin from '@/mixins/globalMixins'
import GarbageIcon from '@/components/icons/GarbageIcon'

export default {
  name: 'CarContentLayout',
  components: { GarbageIcon },
  props: ['product'],
  mixins: [globalMixin],
  methods: {
    removeFromBag (product) {
      this.$store.dispatch({type: 'products/removeFromBag', product})
    }
  }
}
</script>

<style scoped lang="sass">
@import "@/assets/sass/variables.sass"

.cart-products
  min-height: 12%
  width: 100%
  border-bottom: 1px solid $dark-color
  display: flex
  justify-content: center
  align-items: center  
    

  .cart-products-description
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

  .cart-products-description-col-2      
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
</style>