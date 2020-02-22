<template>
  <v-container>
    <v-simple-table width="100%">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th class="text-center">PRODUTOS</th>
            <th class="text-center">QUANTIDADE</th>
            <th class="text-center">VALOR UNITÁRIO</th>
            <th class="text-center">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in productCart" :key="item.name">
            <td class="text-center">
              <v-btn text icon @click="removeToCart(product)">
                <v-icon>mdi-trash-can-outline </v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <small style="color:#8D35B7;">Eletrônicos</small>
              <br />
              <strong>{{ item.name }}</strong>
            </td>
            <td width="38%" class="text-center pa-1">
              <v-card class="d-inline-flex pa-1 mx-auto" outlined tile>
                <v-btn
                  text
                  icon
                  color="red darken-3 mt-1"
                  @click="decrementQuantity(index)"
                  :disabled="item.quantity == 1"
                >
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <p class="mt-1 mb-0 subtitle-1">
                  {{ item.quantity }}
                </p>
                <v-btn
                  text
                  icon
                  color="green darken-3"
                  @click="incrementQuantity(index)"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-card>
            </td>
            <td class="text-center">
              <strong>R${{ item.price }}</strong> à vista <br />
              ou 10x de
              {{ (parseFloat(item.price) / parseInt(10)).toFixed(2) }}
            </td>
            <td class="text-center">
              <strong
                >R${{
                  (parseFloat(item.price) * parseInt(item.quantity)).toFixed(2)
                }}
              </strong>
              à vista <br />
              ou 10x de 150.00
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-divider></v-divider>
    <br />
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="4" xl="2" md="2" lg="2" sm="4" xs="4">
        <p>TOTAL À VISTA</p>
      </v-col>
      <v-col cols="4" xl="2" md="2" lg="2" sm="4" xs="4"
        ><strong style="color:#8D35B7;">R$ {{ totalCart.toFixed(2) }}</strong>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="4" xl="2" md="2" lg="2" sm="4" xs="4">
        <p>TOTAL PARCELADO</p>
      </v-col>
      <v-col cols="4" xl="2" md="2" lg="2" sm="4" xs="4"
        ><small
          >em até
          <strong>10x R$ {{ (totalCart / 10).toFixed(2) }}</strong> (Total R${{
            totalCart
          }})</small
        >
      </v-col>
    </v-row>
    <br />
    <v-divider></v-divider>
    <v-row>
      <v-col cols="12" xl="7" md="7" lg="7" sm="12" xs="12">
        <v-btn text icon @click="removeAll()">
          <v-icon>mdi-trash-can-outline </v-icon>
          <small>Limpar Carrinho</small>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MktTable",
  computed: {
    ...mapGetters(["productCart"])
  },
  data() {
    return {
      totalCart: 0
    };
  },
  methods: {
    incrementQuantity(product) {
      this.$store.dispatch("incrementQuantity", product);
      this.sumValue();
    },
    decrementQuantity(product) {
      this.$store.dispatch("decrementQuantity", product);
      this.sumValue();
    },
    removeToCart(product) {
      this.$store.dispatch("deleteProduct", product);
      this.sumValue();
    },
    sumValue() {
      var sum = 0;
      for (var i = 0; i < this.productCart.length; i++) {
        sum +=
          parseFloat(this.productCart[i].price) * this.productCart[i].quantity;
      }
      this.totalCart = sum;
    },
    removeAll() {
      this.$store.dispatch("deleteProduct", "all");
      this.totalCart = 0;
      console.log(this.totalCart);
    }
  },
  created() {
    this.sumValue();
  }
};
</script>
