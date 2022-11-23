<template>
  <div class="header">
    <router-link :to="{ name: 'home' }">
      <img :src="logo" class="logo" alt="logo" />
    </router-link>
    <div class="header-right products">
      <router-link :to="{ name: 'products' }">
        <a>Produtos</a>
      </router-link>
      <router-link :to="{ name: 'shopping-cart' }">
        <img
          src="../../assets/resources/icons/shopping-cart.svg"
          alt="Carrinho de compras"
        />
        <span class="header-quantity">{{ itemsCount }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import "../../assets/css/header.scss";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Header",
  data: function () {
    return {
      logo: require("../../assets/resources/images/img_logo_mktPlace.png"),
      items: [],
    };
  },
  mounted() {
    this.$store.dispatch("getProductsFromLocalStorage");
  },
  computed: {
    itemsCount() {
      return this.$store.getters.getCountProductsInCart;
    },
  },
  methods: {
    homeRouter() {
      if (this.$router.name != "home") {
        this.$router.push({ name: "home" });
      }
    },
  },
});
</script>
