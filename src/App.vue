<template>
  <div id="app">
    <MenuLayout />
    <router-view :key="$route.fullPath"></router-view>
    <!--<FooterLayout />-->
  </div>
</template>

<script>
import MenuLayout from './components/MenuLayout.vue'
// import FooterLayout from './components/FooterLayout.vue'

export default {
  name: 'App',
  components: { MenuLayout },
}
</script>

<style scoped lang="sass">
#app 
  width: 100%
  height: 100vh
  display: flex
  flex-direction: column 
</style>