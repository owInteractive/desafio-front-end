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
          <img src="@/assets/images/search.svg" alt="search" />
        </button>
      </div>
    </div>
    <div v-for="(produto, id) in filteredListProducts" :key="id">
      <Produto :produto="produto" />
    </div>
  </section>
</template>

<script>
import Produto from './Produto';
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
    ...mapState({ produtos: state => state.produtos.produtos }),
    filteredListProducts() {
      if (this.searchedP) {
        return this.produtos.filter(produtos => {
          let regex = new RegExp(this.searchedP.trim(), 'gi');
          return regex.test(produtos.titulo);
        });
      } else {
        return this.produtos;
      }
    }
  },

  methods: {
    ...mapActions(['getAllProducts'])
  }
};
</script>