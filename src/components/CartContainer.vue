<template>
  <div class="cartContainer">
    <img src="../assets/icons/shopping-cart.svg" />
    <span class="quantityBadge"> 2 </span>
  </div>
</template>

<script>
export default {
  name: "cartContainer",
};
</script>

<style lang="scss" scoped>
.cartContainer {
  position: relative;

  .quantityBadge {
    font-size: 12px;
    color: #fff;
    background: red;
    border-radius: 50%;
    padding: 0 5px;
    position: absolute;
    right: -13px;
    bottom: 0;
  }
}
</style>