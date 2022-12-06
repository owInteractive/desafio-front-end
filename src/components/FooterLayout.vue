<template>
  <div class="footer">
    <p>MktPlace</p>
  </div>
</template>

<script>

export default {
  name: 'FooterLayout', 
}
</script>

<style scoped lang="sass">
@import "@/assets/sass/variables.sass"
@import "@/assets/sass/mixins.sass"

.footer   
  width: 100%
  height: 10%
  @include display-direction-justify-align($jus: center, $ali: center)
  font-family: 'SourceSansBold', "sans-serif"
  background-color: $grey-light-color
  color: $grey-color
  font-size: 1.3rem
  
  p    
    margin: 0px

</style>