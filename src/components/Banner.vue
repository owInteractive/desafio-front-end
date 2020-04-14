<template>
  <div id="banner">
    <div class="banner-content">
      <input type="radio" id="i1" name="images" checked />
      <input type="radio" id="i2" name="images" />
      <div class="slide" id="one">
        <div class="inner-slide">
          <span class="big">Notebooks</span>
          <span>As Melhores Ofertas</span>
        </div>
        <label class="prev" for="i2">
          <span></span>
        </label>
        <label class="next" for="i2">
          <span></span>
        </label>
      </div>
      <div class="slide" id="two">
        <div class="inner-slide">
          <span class="big">Smartphones</span>
          <span>Confira as últimas novidades</span>
        </div>
        <label class="prev" for="i1">
          <span></span>
        </label>
        <label class="next" for="i1">
          <span></span>
        </label>
      </div>
      <div id="nav_slide">
        <label for="i1" class="dots" id="dot1"></label>
        <label for="i2" class="dots" id="dot2"></label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner'
};
</script>