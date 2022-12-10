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
  position: absolute
  width: 100%
  @include display-direction-justify-align($dir: column, $jus: center, $ali: center) 
  background: rgba(0, 0, 0, 0.6)
  z-index: 10

  .alert-item    
    width: 28%    
    @include display-direction-justify-align($dir: column)     
    background-color: $light-color

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

      .alert-item-body-message
        margin: 1% 0
        width: 100%
        @include display-direction-justify-align($jus: center)
        font-size: 1.6rem

      .alert-item-body-action
        width: 100%
        @include display-direction-justify-align($jus: center)

        span          
          text-transform: uppercase         
          color: $purple-color
          cursor: pointer

        svg
          width: 18px 
          height: 18px

</style>
