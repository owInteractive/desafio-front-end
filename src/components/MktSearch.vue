<template>
  <v-row>
    <v-card width="100%" class="pt-4 pl-4 pr-4" elevation="10">
      <v-row>
        <v-col cols="2">
          <p class="font-weight-bold mt-4 grey--text text--darken-1 cols-2">
            Encontre seu produto
          </p>
        </v-col>
        <v-col cols="9">
          <v-text-field
            class="cols-8"
            outlined
            label="Pesquisar..."
            tile
            v-on:keyup="search()"
            v-model="searchValue"
          ></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-btn
            class="mx-n7"
            height="56"
            tile
            dark
            color="#8D35B7"
            @click="search()"
          >
            <v-icon dark>mdi-magnify</v-icon>
          </v-btn></v-col
        >
      </v-row>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: "MktSearch",
  data() {
    return {
      searchValue: ""
    };
  },
  methods: {
    search() {
      let s = this.searchValue;
      this.$emit("search", s);
    }
  }
};
</script>
