<template>
  <v-app-bar :light="true" color="white" flat app>
    <v-container>
      <v-row>
        <router-link to="/">
          <v-toolbar-title>
            <v-img
              width="140"
              class="text-center mt-3"
              src="../assets/logo.png"
            ></v-img>
          </v-toolbar-title>
        </router-link>
        <div class="flex-grow-1"></div>
        <v-toolbar-items class="mr-8 d-none d-sm-flex">
          <v-btn to="/" text>Produtos</v-btn>
        </v-toolbar-items>
        <router-link to="cart">
          <v-btn icon>
            <v-badge color="#ED1C24" bottom>
              <template v-slot:badge>{{ counter }}</template>
              <v-icon color="#8D35B7">mdi-cart</v-icon>
            </v-badge>
          </v-btn>
        </router-link>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters(["counter", "productCart"])
  }
};
</script>
