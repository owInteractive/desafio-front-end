<template>
  <div>
    <v-row>
      <mkt-carousel></mkt-carousel>
    </v-row>
    <v-container>
      <mkt-search @search="filteredAndSorted"></mkt-search>
      <br />
      <v-row>
        <product-card
          v-for="product in products"
          :key="product.id"
          :product="product"
        ></product-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MktCarousel from "@/components/MktCarousel";
import MktSearch from "@/components/MktSearch";
import ProductCard from "@/components/ProductCard";
import ProductService from "../services/ProductsService";

export default {
  name: "Product",
  components: { MktCarousel, MktSearch, ProductCard },
  data() {
    return {
      products: "",
      searchProduct: "",
      originalProducts: ""
    };
  },

  methods: {
    getAllProducts() {
      ProductService.getAll().then(response => {
        this.products = response.data;
        this.originalProducts = response.data;
      });
    },
    filteredAndSorted(search) {
      if (search != "") {
        var filtered = this.products.filter(product => {
          return product.name.toLowerCase().includes(search.toLowerCase());
        });
        this.products = filtered;
      } else {
        this.products = this.originalProducts;
      }
    }
  },
  created() {
    this.getAllProducts();
  }
};
</script>
