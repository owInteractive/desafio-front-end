<template>
  <div class="menu">
    <div class="menu-items container">
      <div class="nav-logo" @click="() => navigateToHome()">        
        <span>Mkt<span class="t-purple">Place</span></span>      
      </div>
      <div class="nav-items"> 
        <span @click="() => navigateToHome()">Produtos</span>
        <router-link to="/carrinho">
            <ShoppingCart />
            <span v-if="getTotalProductsInBag > 0" class="menu-badge">{{ getTotalProductsInBag }}</span>        
        </router-link>               
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingCart from '@/assets/icons/shopping-cart.svg'
import { mapGetters } from 'vuex'

export default {
  name: 'MenuLayout',
  components: { ShoppingCart },
  computed: {    
    ...mapGetters("products", ["getTotalProductsInBag"]),
  },
  methods: {
    navigateToHome () {
      if (this.$route.name !== 'home')
        this.$router.push({name: 'home'}) 
    }
  }
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
    cursor: pointer

    .t-purple
      color: $purple-color

  .menu-items
    width: 100%
    height: 100%
    @include display-direction-justify-align($jus: space-between, $ali: center)     
    font-style: normal
    
    .nav-items      
      @include display-direction-justify-align() 

      span
        cursor: pointer
        
      a 
        margin-left: 30px
        text-decoration: none

        @include media-xs()
          margin-left: 10px      

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