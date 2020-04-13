<template>
  <section id="productList">
    <div class="searchfield">
      <label for="search">Encontre seu produto</label>
      <span></span>

      <div class="input-btn">
        <input
          type="text"
          @input="searchedP = $event.target.value"
          name="search"
          placeholder="Pesquisar..."
        />
        <button>
          <img src="../assets/images/search.svg" alt="search" />
        </button>
      </div>
    </div>
    <div v-for="(product, index) in filteredListProducts" :key="index">
      <Product :product="product" />
    </div>
  </section>
</template>

<script>
import Produto from './Produto.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ListaProd',
  components: {
    Produto
  },

  data() {
    return {
      searchedP: ' '
    };
  },
  mounted() {
    this.getAllProducts();
  },

  computed: {
    ...mapState({ products: state => state.products.products }),
    filteredListProducts() {
      if (this.searchedP) {
        return this.products.filter(product => {
          let regex = new RegExp(this.searchedP.trim(), 'gi');
          return regex.test(product.name);
        });
      } else {
        return this.products;
      }
    }
  },

  methods: {
    ...mapActions(['getAllProducts'])
  }
};
</script>