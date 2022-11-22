<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import "./assets/css/main.scss";
import Header from "./components/layouts/Header.vue";
import Footer from "./components/layouts/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$store.dispatch("getProductsFromLocalStorage");
  },
});
</script>
