<template>
  <div class="cart-actions row">
    <div class="col-lg-3 cart-actions-clear">
      <span @click="() => clearBag()">
        <GarbageIcon /> Limpar carrinho
      </span>       
    </div>
    <div class="col-lg-3 offset-lg-3 cart-actions-buymore">
      <button @click="() => this.$router.push({ name: 'home' })">Continuar comprando</button>
    </div>
    <div class="col-lg-3 cart-actions-buy">
      <button @click="() => this.$router.push({ name: 'checkout' })">Concluir compra</button>
    </div>
  </div>
</template>

<script>
import GarbageIcon from '@/components/icons/GarbageIcon'

export default {
  name: 'CarActionsLayout',
  components: { GarbageIcon },
  methods: {
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

.cart-actions   
  min-height: 12%
  width: 100%
  display: flex
    

  .cart-actions-clear   
    padding: 0  
    display: flex      
    align-items: center

    span
      cursor: pointer
        
      svg
        width: 18px 
        height: 18px        
    
  .cart-actions-buymore
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

  .cart-actions-buy
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