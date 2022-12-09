<template>
  <div class="render-cards">
    <div v-for="item in items" :key="item.id">
      <b-card no-body class="cards">
        <div class="align-images">
          <b-card-img
            class="render-images"
            :src="item.img"
            alt="Images dos produtos"
            top
          ></b-card-img>
        </div>
        <b-card-body>
          <b-card-sub-title class="mb-2 subtitle">{{
            item.category
          }}</b-card-sub-title>
          <b-card-title class="title">{{ item.name }}</b-card-title>
          <b-card-text class="description">
            {{ item.description }}
          </b-card-text>
          <b-card-text> R$ {{ item.price.toLocaleString() }} </b-card-text>
        </b-card-body>
        <b-card-footer class="footer-card" @click="addProductInCart(item)"
          >Adicionar ao carrinho</b-card-footer
        >
      </b-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "../assets/css/renderProducts.scss";
import {
  BCard,
  BCardBody,
  BCardFooter,
  BCardTitle,
  BCardSubTitle,
  BCardText,
  BCardImg,
} from "bootstrap-vue";
import IProduct from "@/types/Product";
export default defineComponent({
  name: "RenderProducts",
  props: {
    items: Array,
  },
  components: {
    BCard,
    BCardBody,
    BCardFooter,
    BCardTitle,
    BCardSubTitle,
    BCardText,
    BCardImg,
  },
  methods: {
    addProductInCart(product: IProduct) {
      this.$store.dispatch("addProductInCart", product);
    },
  },
});
</script>
