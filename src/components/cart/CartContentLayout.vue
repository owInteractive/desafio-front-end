<template>
<tbody class="cart-table-item-body">
  <tr class="cart-table-item-body-tr" v-for="product in getProductsInBag" :key="product.id">
    <td class="cart-table-item-body-tr-garbage">
      <span @click="removeFromBag(product)">
        <GarbageIcon />
      </span>
    </td>       
    <td class="cart-table-item-body-tr-description">
      <span>{{ product.category }}</span>
      <span>{{ product.name }}</span>
    </td>
    <td class="cart-table-item-body-tr-quantity">
      <button :disabled="product.quantity <= 1" @click="() => $store.dispatch({type: 'products/decreaseProduct', product})">-</button>
      <span class="quantity">{{ product.quantity }}</span>
      <button @click="() => $store.dispatch({type: 'products/increaseProduct', product})">+</button>
    </td>
    <td class="cart-table-item-body-tr-value">
      <span class="value-description">{{ brazilianCurrency(product.price) }}</span> 
      &nbsp;à vista ou 10x {{ divideValue(product.price) }}
    </td>
    <td class="cart-table-item-body-tr-total">
      <span class="value-description">{{ brazilianCurrency(product.price * product.quantity) }}</span> 
      &nbsp;à vista ou 10x {{ divideValue(product.price * product.quantity) }}
    </td>
  </tr>
</tbody>
</template>

<script>
import globalMixin from '@/mixins/globalMixins'
import GarbageIcon from '@/components/icons/GarbageIcon'

export default {
  name: 'CarContentLayout',
  components: { GarbageIcon },
  props: ['getProductsInBag'],
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
@import "@/assets/sass/mixins.sass"

.cart-table-item-body       
  width: 100%
  border-bottom: 1px solid $dark-color        
  @include display-direction-justify-align($dir: column)

  @include media-medium-table()
    border-bottom: none
    @include display-direction-justify-align($dir: row, $jus: space-around)
    flex-wrap: wrap
          
  tr
    padding-top: 2% 
    padding-bottom: 2%
    width: 100%
    display: flex
    border-bottom: 1px solid $dark-color 

    @include media-medium-table()
      margin-top: 2%
      padding: 4% 0
      width: 48%
      box-shadow: 0 0 20px $grey-shadow-color
      border-bottom: none
      @include display-direction-justify-align($dir: column, $ali: center)

    @include media-small-table()
      width: 100%    

    @include media-default-table()          
      td
        width: 25%           
        display: flex               
      
      td:first-child
        width: 4%           

      td:nth-child(3)
        width: 12%          

      td:nth-child(2), td:nth-child(4), td:nth-child(5)
        width: 28%

      td:nth-child(4), td:nth-child(5)
        white-space: nowrap  
    
    .cart-table-item-body-tr-description
      @include display-direction-justify-align($dir: column)

      @include media-medium-table()
        @include display-direction-justify-align($dir: column, $ali: center)
      
      span
        font-family: 'SourceSansBold', "sans-serif"
        
      span:first-child
        color: $purple-color
        font-size: 0.9rem

        @include media-extra-small-table
          font-size: 0.7rem

      span:last-child
        font-size: 1.1rem

        @include media-extra-small-table
          font-size: 0.8rem                   

    .cart-table-item-body-tr-quantity            
      @include display-direction-justify-align($ali: center)
      
      @include media-medium-table()
        margin: 4% 0

      span
      cursor: pointer

      button       
        width: 22px
        height: 35px             
        @include display-direction-justify-align($jus: center, $ali: center)
        cursor: pointer
        font-size: 1.1rem
        border: 1px solid $grey-light-color
        background-color: $light-color

      .quantity
        @include display-direction-justify-align($jus: center, $ali: center)             
        width: 40px
        height: 35px       
        border: 1px solid $grey-light-color
        font-family: 'SourceSansBold', "sans-serif"

    .cart-table-item-body-tr-value, .cart-table-item-body-tr-total, .cart-table-item-body-tr-garbage
      @include display-direction-justify-align($ali: center)

      @include media-medium-table()
        display: inline

      @include media-extra-small-table
        font-size: 0.8rem
    
      .value-description              
        font-family: 'SourceSansBold', "sans-serif"             

    .cart-table-item-body-tr-garbage

      @include media-medium-table()
        margin-top: 3%
        order: 5
      
      span
        cursor: pointer
  
        svg
          width: 22px 
          height: 22px

          @include media-medium-table()
            width: 30px 
            height: 30px               
  
  tr:last-child
    border-bottom: none

</style>