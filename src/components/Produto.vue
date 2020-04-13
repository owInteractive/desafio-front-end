<template>
  <div id="product">
    <div class="card-product">
      <img :src="product.picture" class="product-photo" alt="Foto do produto" />
      <div class="card-body">
        <span>Eletrônicos</span>
        <strong class="card-title">{{ product.name.substring(0, 30) }}</strong>
        <p class="card-text">
          Lorem ipsum dolor sit amet, cons ctetur adipiscing elit. Etiam pell
          sit amet,cons
        </p>
        <strong class="price">R$ {{ product.price }}</strong>
      </div>
      <a class="btn" @click="addToCart(product)">Adicionar ao carinho</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Produto',
  props: ['produto'],
  methods: {
    ...mapActions(['addProductToCart']),
    addToCart() {
      this.addProductToCart({ product: this.product, quantity: 1 });
    }
  }
};
</script>