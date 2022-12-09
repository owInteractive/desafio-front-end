<template>
  <div class="carousel">
    <ul class="slides">
      <input type="radio" name="radio-buttons" id="img-1" checked />
      <li class="slide-container">
        <div class="slide-image">
          <img :src="img1.src" :alt="img1.alt" />
        </div>
      </li>
      <input type="radio" name="radio-buttons" id="img-2" />
      <li class="slide-container">
        <div class="slide-image">
          <img :src="img2.src" :alt="img2.alt" />
        </div>
      </li>
      <div class="carousel-dots">
        <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
        <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import "../assets/css/carousel.scss";
export default {
  name: "Caroulsel",
  props: {
    img1: Object,
    img2: Object,
  },
};
</script>
