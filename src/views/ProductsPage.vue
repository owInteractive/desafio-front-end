<template>
  <MainCarouselVue />

  <section>
    <div class="container search--container">
      <div class="row align-items-center">
        <div class="col-12 col-sm-4">
          <p class="search--title">Encontre seu produto</p>
        </div>
        <div class="col-12 col-sm-8">
          <div class="search__input--container">
            <input v-model="search" type="text" placeholder="Pesquisar..." />
            <button>
              <img src="../assets/icons/magnifying-glass.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <div class="row">
        <div
          v-for="(product, i) in filteredProducts"
          :key="i"
          class="col-lg-4 my-2"
        >
          <ProductItem :data="product"></ProductItem>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MainCarouselVue from "@/components/MainCarousel.vue";
import ProductItem from "@/components/ProductItem.vue";
import ProductsAPI from "@/services/products";

export default {
  components: {
    MainCarouselVue,
    ProductItem,
  },

  data() {
    return {
      listProducts: [],
      search: "",
    };
  },
  mounted() {
    ProductsAPI.product().then((response) => {
      const { data } = response;
      this.listProducts = data;
    });
  },
  computed: {
    filteredProducts() {
      return this.listProducts.filter((product) => {
        return (
          product.name.toLowerCase().includes(this.search.toLowerCase()) ||
          product.category.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/variables.scss";
.search--container {
  margin-top: 32px;
  padding: $default-padding calc(2 * $default-padding);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);

  .search--title {
    font-family: "SourceSansProBold";
    color: #909090;
    margin: 0;
  }
  .search__input--container {
    display: flex;

    input {
      flex: 1 0 auto;
      border: 1px solid #909090;
      border-radius: 4px 0 0 4px;
      padding: 6px 16px;
      outline: none;

      &:focus,
      &:focus-visible {
        border: 1px solid #8e36b7;
      }

      &::placeholder {
        font-size: 12px;
        color: #ccc;
      }
    }
    button {
      background: #8e36b7;
      padding: 4px 12px;
      border: none;
      border-radius: 0 4px 4px 0;

      img {
        height: 16px;
      }
    }
  }
}
</style>