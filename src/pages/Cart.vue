<template>
  <div>
    <v-row>
      <mkt-table></mkt-table>
    </v-row>

    <v-container>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="12" xl="5" md="5" lg="5" sm="12" xs="12">
          <router-link to="/">
            <v-btn depressed>Continuar comprando</v-btn>
          </router-link>
          <router-link to="/checkout">
            <v-btn depressed color="#8D35B7" class="ml-6" dark
              >Concluir compra</v-btn
            >
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MktTable from "@/components/MktTable";

export default {
  name: "Cart",
  components: { MktTable },
  methods: {}
};
</script>
