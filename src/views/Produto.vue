<template>
  <div class="container-home">
    <Banner />
    <Pesquisa />
    <ListaProd />
  </div>
</template>

<script>
import Banner from '@/components/Banner';
import Pesquisa from '@/components/Pesquisa'
import ListaProd from '@/components/ListaProd';

export default {
  name: 'Produto',
  components: {
    Banner,
    Pesquisa,
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
    '. searchfield .'
    '. product-list .';
  grid-area: home;
}
</style>