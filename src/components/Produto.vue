<template>
  <div id="product">
    <div class="card-product">
      <img :src="produtos.imagem" class="product-photo" alt="Product Photo" />
      <div class="card-body">
        <span>Eletrônicos</span>
        <strong class="card-title">{{ produtos.titulo.substring(0, 30) }}</strong>
        <p class="card-text">
          Lorem ipsum dolor sit amet, cons ctetur adipiscing elit. Etiam pell
          sit amet,cons
        </p>
        <strong class="price">R$ {{ produtos.preco }}</strong>
      </div>
      <a class="btn" @click="addToCart(produtos)">Adicionar ao carinho</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Produto',
  props: ['produtos'],
  methods: {
    ...mapActions(['addProductToCart']),
    addToCart() {
      this.addProductToCart({ produtos: this.produtos, quantity: 1 });
    }
  }
};
</script>