<template>
  <div id="app">
    <AppHeader />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">

</style>
