<template>
  <thead class="cart-table-item-header">
    <tr>
      <th></th>
      <th>Produtos</th>
      <th>Quantidade</th>
      <th>Valor Unitário</th>
      <th>Total</th>
    </tr>
  </thead>
</template>

<script>

export default {
  name: 'CarHeaderLayout',
}
</script>

<style scoped lang="sass">
@import "@/assets/sass/variables.sass"
@import "@/assets/sass/mixins.sass"

.cart-table-item-header
  width: 100%
  border-bottom: 1px solid $dark-color

  @include media-medium-table()
    display: none

  tr
    width: 100%         
    @include display-direction-justify-align($jus: space-around) 
    padding-bottom: 2%

    th            
      font-family: 'SourceSansBold', "sans-serif"
      text-transform: uppercase
      font-size: 1.1rem
    
    th:first-child
      width: 4%

    th:nth-child(3)
      width: 12%

    th:nth-child(2), th:nth-child(4), th:nth-child(5)
      width: 28%

</style>