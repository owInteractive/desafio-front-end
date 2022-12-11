<template>
  <div class="alert container-fluid">
    <div class="alert-item">      
      <div class="alert-item-close">
        <p @click="() => this.$router.push({name: 'home'})">X</p>
      </div>             
      <div class="alert-item-body"> 
        <div class="alert-item-body-icon">
          <img :src="modalInfo.icon" />
        </div>
        <div class="alert-item-body-message">
          <p>{{ modalInfo.message }}</p>
        </div>
        <div class="alert-item-body-action">          
          <router-link to="/">
            <LeftArrowIcon /> 
            {{ modalInfo.action }}
          </router-link>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import LeftArrowIcon from '@/components/icons/LeftArrowIcon.vue'

export default {
  name: 'AlertLayout',
  components: { LeftArrowIcon },
  props: ['modalInfo','showModal'], 
}
</script>

<style scoped lang="sass">
@import "@/assets/sass/variables.sass"
@import "@/assets/sass/mixins.sass"

.alert
  top: 0
  bottom: 0
  position: fixed
  width: 100%
  height: 100%  
  @include display-direction-justify-align($dir: column, $jus: center, $ali: center) 
  background: $dark-opacity-color
  z-index: 10  

  .alert-item    
    width: 38%    
    @include display-direction-justify-align($dir: column)     
    background-color: $light-color

    @include media-xs
      width: 100%
    @include media-sm
      width: 100%
    @include media-md
      width: 80%
    @include media-lg
      width: 60%    

    .alert-item-close      
      width: 100%
      @include display-direction-justify-align($jus: flex-end)

      p        
        margin-top: 2%
        margin-right: 3%
        font-size: 1.4rem
        cursor: pointer

    .alert-item-body
      margin: 0% 0 8% 0
      width: 100%
      @include display-direction-justify-align($dir: column)

      .alert-item-body-icon
        width: 100%
        @include display-direction-justify-align($jus: center)

        img
          width: 150px
          height: 150px

          @include media-xs
            width: 100px
            height: 100px

      .alert-item-body-message
        margin: 1% 0
        width: 100%
        @include display-direction-justify-align($jus: center)
        font-size: 1.6rem

        @include media-xs
          font-size: 1.2rem

      .alert-item-body-action
        width: 100%
        @include display-direction-justify-align($jus: center)

        a          
          text-decoration: none
          text-transform: uppercase         
          color: $purple-color
          cursor: pointer

          @include media-xs
            font-size: 0.8rem

        svg
          width: 18px 
          height: 18px

          @include media-xs
            width: 14px 
            height: 14px

</style>
