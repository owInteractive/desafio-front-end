<template>
  <div class="cart-header row">
      <div class="col cart-header-description"></div>
      <div class="col cart-header-description">
        <p>Produtos</p>
      </div>
      <div class="col cart-header-description">
        <p>Quantidade</p>
      </div>
      <div class="col cart-header-description">
        <p>Valor Unitário</p>
      </div>
      <div class="col cart-header-description">
        <p>Total</p>
      </div>     
  </div>
</template>

<script>

export default {
  name: 'CarHeaderLayout',
}
</script>

<style scoped lang="sass">
@import "@/assets/sass/variables.sass"

.cart-header    
    min-height: 5%
    width: 100%    
    border-bottom: 1px solid $dark-color
    display: flex    
    
    p
      font-family: 'SourceSansBold', "sans-serif"
      text-transform: uppercase     

</style>