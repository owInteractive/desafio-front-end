<template>
  <div class="container-home">
    <Banner />
    <ProductList />
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import ListaProd from '@/components/ListaProd.vue';

export default {
  name: 'home',
  components: {
    Banner,
    ListaProd
  }
};
</script>

<style lang="scss"></style>

<style lang="scss">
.container-home {
  display: grid;
  grid-template-columns: 2fr 12fr 2fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'banner banner banner'
    ' .searchfield .'
    '. product-list .';
  grid-area: home;
}
</style>