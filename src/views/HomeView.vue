<template>
  <div class="home">
    <BannerLayout />
    <ProductListLayout />
  </div>
</template>

<script>
import BannerLayout from '@/components/BannerLayout.vue'
import ProductListLayout from '@/components/products/ProductListLayout.vue'

export default {
  name: 'HomeView',
  components: { BannerLayout, ProductListLayout }, 
}
</script>

<style scoped lang="sass">

.home
  width: 100%
  height: 80%
  display: flex
  flex-direction: column 

</style>
