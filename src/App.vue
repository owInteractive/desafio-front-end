<template>
  <!-- App.vue -->
  <v-app>
    <Header></Header>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app padless>
      <Footer></Footer>
    </v-footer>
  </v-app>
</template>

<script>
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

export default {
  name: "App",

  components: {
    Header,
    Footer
  },

  data: () => ({
    //
  })
};
</script>
