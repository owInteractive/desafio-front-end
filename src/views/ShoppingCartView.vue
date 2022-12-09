<template>
  <div class="shooping-cart">
    <section class="container">
      <div class="table-responsive">
        <table class="cart table">
          <thead class="header-table">
            <tr>
              <td></td>
              <td>Produtos</td>
              <td>Quantidade</td>
              <td>Valor Unitário</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody class="body-table">
            <tr v-for="item in productsInCart" :key="item.id">
              <td class="text-center">
                <button @click="removeFromCart(item)">
                  <img
                    src="../assets/resources/icons/trash.svg"
                    alt="Carrinho de compras"
                  />
                </button>
              </td>
              <td class="description">
                <div>
                  <span>{{ item.category }}</span>
                  <p>{{ item.name }}</p>
                </div>
              </td>
              <td>
                <div class="quantity">
                  <button @click="decrementProductInCart(item)">-</button>
                  <input type="text" v-model="item.quantity" />
                  <button @click="incrementProductInCart(item)">+</button>
                </div>
              </td>
              <td>
                <div class="prices">
                  <p>
                    <strong
                      >R$
                      {{
                        item.price.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      }}</strong
                    >
                    à vista
                  </p>
                  <span
                    >ou 10x R$
                    {{
                      (item.price / 10).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    }}</span
                  >
                </div>
              </td>
              <td>
                <div class="prices">
                  <p>
                    <strong
                      >R$
                      {{
                        (item.price * item.quantity).toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      }}</strong
                    >
                    à vista
                  </p>
                  <span
                    >ou 10x R$
                    {{
                      ((item.price * item.quantity) / 10).toLocaleString(
                        "pt-br",
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )
                    }}</span
                  >
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="row total mt-2">
        <div
          class="col-6 col-sm-10 d-flex justify-content-end align-items-center"
        >
          <h3>Total à vista</h3>
        </div>
        <div class="col-6 col-sm-2">
          <p>
            R$
            {{
              totalPriceProductsInCart.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            }}
          </p>
        </div>
      </div>
      <div class="row total total--bordered mt-4">
        <div
          class="col-6 col-sm-10 d-flex justify-content-end align-items-center"
        >
          <h3>Total parcelado</h3>
        </div>
        <div class="col-6 col-sm-2">
          <span
            >em até
            <strong>
              10x R${{
                (totalPriceProductsInCart / 10).toLocaleString("pt-br", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              }}
            </strong></span
          >
        </div>
      </div>
      <div class="row mt-2 controls">
        <div class="col-12 col-sm-3">
          <button class="clear mb-3" @click="clearProductsInCart()">
            <img
              src="../assets/resources/icons/trash.svg"
              alt="Carrinho de compras"
            />
            Limpar carrinho
          </button>
        </div>
        <div class="col-12 col-sm-9 d-flex justify-content-end">
          <router-link to="/products" class="continue"
            >Continuar comprando</router-link
          >
          <router-link to="/checkout" class="finish"
            >Concluir compra</router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import "../assets/css/shoppingCart.scss";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.$store.dispatch("getProductsFromLocalStorage");
  },
  computed: {
    productsInCart() {
      return this.$store.getters.getProductsInCart;
    },
    totalPriceProductsInCart() {
      let price = 0;
      this.$store.getters.getProductsInCart.map((item) => {
        price += item.price * item.quantity;
      });
      return price;
    },
  },
  methods: {
    incrementProductInCart(item) {
      this.$store.dispatch("addProductInCart", item);
    },
    decrementProductInCart(item) {
      this.$store.dispatch("removeQuantityProductsInCart", item);
    },
    removeProductInCart(item) {
      this.$store.dispatch("removeProductInCart", item);
    },
    clearProductsInCart() {
      this.$store.dispatch("clearProductsInCart");
    },
  },
});
</script>
