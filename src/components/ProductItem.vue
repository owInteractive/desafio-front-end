<template>
  <div class="product__container">
    <img :src="data.imageUrl" alt="" />
    <div class="product__details">
      <span class="product__details--category">{{ data.category }}</span>
      <h3 class="product__details--title">{{ data.name }}</h3>
      <p class="product__details--description">
        {{ data.description }}
      </p>
      <span class="product__details--price"
        >R$ {{ data.price.toLocaleString() }}</span
      >
    </div>
    <button class="product__button" @click="addProductToCart">
      Adicionar ao carrinho
    </button>
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Object },
  },
  methods: {
    addProductToCart() {
      this.$store.commit("addToCart", this.data);
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  &__container {
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);

    img {
      display: block;
      margin: 0 auto;
      max-width: 80%;
    }
  }

  &__details {
    padding: 16px;

    &--category {
      font-size: 12px;
      font-family: "SourceSansProBold", sans-serif;
      color: #8e36b7;
    }

    &--title {
      font-size: 18px;
      font-family: "SourceSansProBold", sans-serif;
      color: #434343;
    }

    &--description {
      font-size: 16px;
      color: #909090;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
    }

    &--price {
      font-size: 20px;
      font-family: "SourceSansProBold", sans-serif;
    }
  }

  &__button {
    width: 100%;
    padding: 16px 0;
    border: none;
    border-top: 1px solid #aaaaaa;
    background: #fff;
    outline: none;
    text-transform: uppercase;
    font-size: 14px;
    color: #8e36b7;
    font-family: "SourceSansProBold";
    transition: 0.2s all;
    &:hover {
      background: #8e36b7;
      color: #fff;
    }
  }
}
</style>