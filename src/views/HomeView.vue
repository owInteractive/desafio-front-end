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
@import "@/assets/sass/mixins.sass"

.home
  width: 100%
  min-height: 80%
  @include display-direction-justify-align($dir: column)   

</style>
