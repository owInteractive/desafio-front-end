<template>
  <v-col cols="12" xl="4" md="4" lg="4" sm="6" xs="12">
    <v-card>
      <v-img
        class="white--text align-end"
        height="200px"
        :src="product.picture"
      >
      </v-img>
      <v-card-subtitle class="pb-0 font-weight-bold" style="color:#8D35B7;">
        <span>Eletrônicos</span></v-card-subtitle
      >
      <div height="200">
        <v-card-title>{{ product.name }}</v-card-title>
      </div>

      <v-card-text class="grey--text">
        <div>Whitehaven Beach</div>
        <div>Whitsunday Island, Whitsunday Islands</div>

        <div class="mt-4 black--text">
          <h1>R$ {{ product.price }}</h1>
        </div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="pa-0">
        <v-hover v-slot:default="{ hover }">
          <v-btn
            color="#8D35B7"
            :outlined="hover ? false : true"
            block
            dark
            style="border:none"
            tile
            @click="add(product)"
          >
            Adicionar ao carrinho
          </v-btn>
        </v-hover>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MktSearch",
  props: ["product"],
  data: () => ({
    hover: false
  }),
  computed: {
    ...mapGetters(["productCart"])
  },
  methods: {
    add(product) {
      this.$store.dispatch("addProduct", product);
    }
  }
};
</script>
