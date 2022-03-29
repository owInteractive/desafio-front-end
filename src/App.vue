<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <footer class="footer mt-4">MktPlace</footer>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
  mounted() {
    this.$store.commit("updateCartFromLocalStorage");
  },
};
</script>

<style lang="scss">
.footer {
  background: #bbbbbb;
  padding: 16px 0;
  text-align: center;
  color: #666;
  font-family: "SourceSansProBold", sans-serif;
  font-size: 24px;
}
</style>
