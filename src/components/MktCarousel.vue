<template>
  <v-carousel :show-arrows="false" height="444">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="require('../assets/' + item.src)"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "MktCarousel",
  data() {
    return {
      items: [
        {
          src: "slide-1.jpg"
        },
        {
          src: "slide-2.jpg"
        }
      ]
    };
  }
};
</script>
