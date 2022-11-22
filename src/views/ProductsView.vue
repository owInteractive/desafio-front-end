<template>
  <div>
    <div class="pages-title">
      <span>Confira abaixo toda a nossa lista de produtos:</span>
    </div>
    <div class="filter-products">
      <section>
        <div class="container search">
          <div class="row align-items-center">
            <div class="col-12 col-sm-6">
              <p class="title">Procure abaixo pelo seu produto:</p>
            </div>
            <div class="col-12 col-sm-4">
              <div class="input">
                <input v-model="search" type="text" placeholder="Procurar..." />
                <b-button @click="serchProduct">
                  <img
                    src="../assets/resources/icons/magnifying-glass.svg"
                    alt="Procurar pelo item..."
                  />
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <RenderProductss :items="items" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import configAxios from "../configAxios";
import RenderProductss from "../components/RenderProducts.vue";
import { BButton } from "bootstrap-vue";
import IProduct from "../types/Product";

export default defineComponent({
  name: "ProductsView",
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
      search: "",
      items: [],
      filterItems: [],
      reservedItems: [],
    };
  },
  components: {
    RenderProductss,
    BButton,
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
          this.reservedItems = this.items;
        })
        .catch(() => {
          this.$toast.error(
            "Tivemos dificuldades para buscar os produtos, por favor, tente novamente!"
          );
        });
    },
    serchProduct() {
      this.filterItems.length = 0;
      this.filterItems = this.items.filter((element: IProduct) => {
        return element.name.toLowerCase().includes(this.search.toLowerCase());
      });
      if (this.filterItems.length > 0) {
        this.items = this.filterItems;
      } else {
        this.items = this.reservedItems;
        this.$toast.warning(
          "Não encontramos itens com os parâmetros informados!"
        );
      }
    },
  },
});
</script>
