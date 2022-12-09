<template>
  <div>
    <Carousel :img1="img1" :img2="img2" />
    <div class="pages-title">
      <span>Confira abaixo os nossos produtos em destaque:</span>
    </div>
    <RenderProducts :items="items" />
  </div>
</template>

<script lang="ts">
import Carousel from "../components/Carousel.vue";
import { defineComponent } from "vue";
import configAxios from "../configAxios";
import RenderProducts from "../components/RenderProducts.vue";
import IProduct from "../types/Product";

export default defineComponent({
  name: "HomeView",
  data: function () {
    return {
      img1: {
        src: require("/src/assets/resources/images/img_banner_01.png"),
        alt: "Banner 01",
      },
      img2: {
        src: require("/src/assets/resources/images/img_banner_02.png"),
        alt: "Banner 02",
      },
      imagesProducts: [
        require("../assets/resources/images/img_notebook02.jpg"),
        require("../assets/resources/images/img_notebook04.jpg"),
        require("../assets/resources/images/img_notebook02.jpg"),
        require("../assets/resources/images/img_notebook04.jpg"),
        require("../assets/resources/images/img_notebook02.jpg"),
        require("../assets/resources/images/img_notebook04.jpg"),
      ],
      items: [],
    };
  },
  components: {
    Carousel,
    RenderProducts,
  },
  mounted() {
    this.getInfosProducts();
  },
  methods: {
    getInfosProducts() {
      configAxios
        .get("/desafio-frontend-2020/master/produtos.json")
        .then((response) => {
          this.items = response.data;
          this.items.forEach((products: IProduct, index: number) => {
            products.img = this.imagesProducts[index];
          });
        })
        .catch(() => {
          this.$toast.error(
            "Tivemos dificuldades para buscar os produtos, por favor, tente novamente"
          );
        });
    },
  },
});
</script>
