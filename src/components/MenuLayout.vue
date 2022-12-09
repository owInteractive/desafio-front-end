<template>
  <div class="menu">
    <div class="menu-items">
      <div class="nav-logo">        
        <span>Mkt<span class="t-purple">Place</span></span>      
      </div>
      <div class="nav-items"> 
        <span>Produtos</span>
        <router-link to="/carrinho">
            <ShoppingCart />
            <span v-if="productsInBag.length > 0" class="menu-badge">{{ productsInBag.length }}</span>        
        </router-link>               
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingCart from '@/assets/icons/shopping-cart.svg'
import { mapState } from 'vuex'

export default {
  name: 'MenuLayout',
  components: { ShoppingCart },
  computed: {    
    ...mapState("products", ["productsInBag"]),
  },
}
</script>

<style scoped lang="sass">
@import "@/assets/sass/variables.sass"
@import "@/assets/sass/mixins.sass"

.menu 
  background-color: $light-color
  width: 100%
  height: 10%  
  font-family: 'SourceSansBold', "sans-serif"
  color: $grey-light-color
  box-shadow: 0 0 20px $grey-shadow-color

  .nav-logo     
    font-size: 1.3rem

    .t-purple
      color: $purple-color

  .menu-items
    width: 100%
    height: 100%
    @include display-direction-justify-align($jus: space-around, $ali: center)     
    font-style: normal
    
    .nav-items      
      @include display-direction-justify-align() 

      span        
        

      a 
        margin-left: 30px
        text-decoration: none        

        svg

          path
            fill: $purple-color 
        
        .menu-badge
          color: $light-color 
          font-size: 0.6rem
          margin-left: 5px         
          background-color: $red-color
          padding: 2px 5px 2px 5px
          border-radius: 50%
          bottom: 0

</style>