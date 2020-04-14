<template>
  <section id="productList">
    <div class="searchfield">
      <label for="search">Encontre seu produto</label>
      <span></span>

      <div class="input-btn">
        <input type="text" @input="searchedP = $event.target.value" name="search" placeholder="Pesquisar..." />
        <button>
          <img src="../assets/images/search.svg" alt="search" />
        </button>
      </div>
    </div>
    <div>
      <Produto
       v-for="produtos in produtos"
       :titulo="produtos.titulo"
       :valor="produtos.preco"
       :imagem="produtos.imagem"
       v-bind:key="produtos" />
    </div>
  </section>
</template>

<script>
import Produto from './Produto'
import axios from 'axios';
export default {
  data() {
    return {
      sliding: null,
      produtos: [],
      errors: []
    };
  },
      name: 'Pesquisa',
      components: {
        Produto
      },
  // Chamada do Axios para consumir a API
  created() {
    axios
        .get('http://localhost:3000/produtos')
        .then(response => {
          this.produtos = response.data;
        })
        .catch(err => {
          this.errors.push(err);
        });
   }
  };
</script>
