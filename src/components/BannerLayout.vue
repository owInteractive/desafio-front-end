<template>
  <div class="banner">
    <carousel :per-page="1" :mouse-drag="false" paginationActiveColor='purple'>
      <slide class="banner-slide banner-slide-item-first">
        <div class="container banner-slide-items">
          <h1>Notebooks</h1>
          <p>As melhores ofertas</p>
        </div>       
      </slide>
      <slide class="banner-slide banner-slide-item-second">
        <div class="container banner-slide-items">
          <h1>Eletrodomésticos</h1>
          <p>Você só encontra aqui</p>
        </div> 
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'BannerLayout',
  components: { Carousel, Slide },
}
</script>

<style scoped lang="sass">
@import "@/assets/sass/variables.sass"
@import "@/assets/sass/mixins.sass"

.banner
  width: 100%   
        
  .banner-slide    
    min-width: 100%
    max-height: 100%
    height: 250px
    @include display-direction-justify-align($jus: center, $ali: center)   
    
    .banner-slide-items
      width: 100%
      @include display-direction-justify-align($dir: column, $ali: flex-end)     
      font-family: 'SourceSansBold', "sans-serif"
      color: $light-color
      font-size: 1.2rem

  .banner-slide-item-first
    background-image: linear-gradient(to right, $purple-color, $purple-light-color)

  .banner-slide-item-second 
    background-image: linear-gradient(to right, $blue-color, $blue-light-color)

</style>