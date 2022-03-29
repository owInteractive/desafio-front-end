<template>
  <section class="container">
    <div class="table-responsive">
      <table class="cart table">
        <thead class="cart__header">
          <tr>
            <td></td>
            <td>Produtos</td>
            <td>Quantidade</td>
            <td>Valor Unitário</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody class="cart__body">
          <tr v-for="item in items" :key="item.id">
            <td class="text-center">
              <button @click="removeFromCart(item)">
                <svg
                  width="21"
                  height="27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.247 3.016h-6.052c-.046-.538-.212-1.448-.78-2.03-.36-.368-.814-.555-1.354-.555H7.752c-.539 0-.995.187-1.352.555-.568.582-.735 1.492-.783 2.03H.431a.43.43 0 1 0 0 .86h.88l.824 19.827c.017.74.478 2.143 2.114 2.143h12.178c1.637 0 2.1-1.403 2.114-2.135l.827-19.835h.88a.428.428 0 0 0 .428-.429.428.428 0 0 0-.429-.431ZM6.462 21.969a.432.432 0 0 1-.863 0V7.755a.43.43 0 1 1 .863 0v14.214Zm4.307 0a.432.432 0 0 1-.862 0V7.755a.43.43 0 1 1 .862 0v14.214Zm4.308 0a.432.432 0 0 1-.863 0V7.755a.43.43 0 1 1 .863 0v14.214ZM7.019 1.586c.192-.198.433-.293.734-.293h4.307c.304 0 .543.095.737.293.347.355.486.978.534 1.43H6.485c.048-.452.187-1.075.534-1.43Z"
                    fill="#cfcfcf"
                  />
                </svg>
              </button>
            </td>
            <td class="cart__body__description">
              <div>
                <span>{{ item.category }}</span>
                <p>{{ item.name }}</p>
              </div>
            </td>
            <td>
              <div class="cart__body__quantity">
                <button @click="decrementProduct(item)">-</button>
                <input type="text" v-model="item.quantity" />
                <button @click="incrementProduct(item)">+</button>
              </div>
            </td>
            <td>
              <div class="cart__body__prices">
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
              <div class="cart__body__prices">
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
    <div class="row cart__totals mt-2">
      <div
        class="col-6 col-sm-10 d-flex justify-content-end align-items-center"
      >
        <h3>Total à vista</h3>
      </div>
      <div class="col-6 col-sm-2">
        <p>
          R$
          {{
            totalPrice.toLocaleString("pt-br", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
          }}
        </p>
      </div>
    </div>
    <div class="row cart__totals cart__totals--bordered mt-4">
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
              (totalPrice / 10).toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            }}
          </strong></span
        >
      </div>
    </div>
    <div class="row mt-2 cart__controls">
      <div class="col-12 col-sm-3">
        <button class="cart__controls__clear mb-3" @click="clearCart()">
          <svg
            width="21"
            height="27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.247 3.016h-6.052c-.046-.538-.212-1.448-.78-2.03-.36-.368-.814-.555-1.354-.555H7.752c-.539 0-.995.187-1.352.555-.568.582-.735 1.492-.783 2.03H.431a.43.43 0 1 0 0 .86h.88l.824 19.827c.017.74.478 2.143 2.114 2.143h12.178c1.637 0 2.1-1.403 2.114-2.135l.827-19.835h.88a.428.428 0 0 0 .428-.429.428.428 0 0 0-.429-.431ZM6.462 21.969a.432.432 0 0 1-.863 0V7.755a.43.43 0 1 1 .863 0v14.214Zm4.307 0a.432.432 0 0 1-.862 0V7.755a.43.43 0 1 1 .862 0v14.214Zm4.308 0a.432.432 0 0 1-.863 0V7.755a.43.43 0 1 1 .863 0v14.214ZM7.019 1.586c.192-.198.433-.293.734-.293h4.307c.304 0 .543.095.737.293.347.355.486.978.534 1.43H6.485c.048-.452.187-1.075.534-1.43Z"
              fill="#cfcfcf"
            />
          </svg>
          Limpar carrinho
        </button>
      </div>
      <div class="col-12 col-sm-9 d-flex justify-content-end">
        <router-link to="/" class="cart__controls__continue"
          >Continuar comprando</router-link
        >
        <router-link to="/checkout" class="cart__controls__finish"
          >Concluir compra</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters.cartItems;
    },
    totalPrice() {
      let price = 0;
      this.$store.getters.cartItems.map((item) => {
        price += item.price * item.quantity;
      });
      return price;
    },
    totalPriceInstallments() {
      let price = 0;
      this.$store.getters.cartItems.map((item) => {
        price += item.price * item.quantity;
      });
      return price / 10;
    },
  },
  methods: {
    removeFromCart(item) {
      this.$store.commit("removeFromCart", item);
    },
    incrementProduct(item) {
      this.$store.commit("addToCart", item);
    },
    decrementProduct(item) {
      this.$store.commit("removeQuantityFromCart", item);
    },
    clearCart() {
      this.$store.commit("clearCart");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/variables.scss";

.container {
  flex: 1;
}
.cart {
  width: 100%;
  margin-top: calc(4 * $default-padding);

  &__header {
    border-bottom: 1px solid #aaaaaa;

    td {
      text-align: center;
      font-size: 18px;
      font-family: "SourceSansProBold";
      padding: 16px 0;
      color: #434343;
      text-transform: uppercase;
    }
  }

  &__body {
    button {
      background: none;
      border: none;
    }

    td {
      vertical-align: middle;
    }

    &__description {
      div {
        flex: 1;
        margin-left: 6px;
        span {
          color: #8e36b7;
          font-size: 12px;
          font-weight: 600;
        }
        p {
          font-size: 16px;
          font-weight: 600;
          color: #434343;
        }
      }
    }
    &__quantity {
      display: flex;
      justify-content: center;
      button {
        background: transparent;
        border: 1px solid #434343;
        color: #434343;
        padding: 2px 8px;
        transition: 0.2s all;

        &:first-of-type {
          border-radius: 4px 0 0 4px;
        }
        &:last-of-type {
          border-radius: 0 4px 4px 0;
        }

        &:hover {
          background: #ccc;
        }
      }
      input {
        border: 1px solid #434343;
        border-left: 0;
        border-right: 0;
        max-width: 80px;
        outline: none;
        text-align: center;
      }
    }
    &__prices {
      p,
      span {
        font-size: 16px;
        font-weight: 500;
        color: #434343;
      }
    }
  }

  &__totals {
    h3 {
      color: #434343;
      font-family: "SourceSansProBold", sans-serif;
      text-transform: uppercase;
      font-size: 18px;
      margin: 0;
    }
    p {
      color: #8e36b7;
      font-family: "SourceSansProBold", sans-serif;
      text-transform: uppercase;
      font-size: 18px;
    }
    span {
      color: #434343;
    }

    &--bordered {
      padding-bottom: 16px;
      border-bottom: 2px solid #ccc;
    }
  }

  &__controls {
    &__clear {
      background: transparent;
      border: 0;
      color: #434343;
      font-family: "SourceSansProBold", sans-serif;
      transition: 0.2s all;

      &:hover {
        color: #8e36b7;
      }
    }

    &__continue {
      border-radius: 4px;
      padding: 8px 16px;
      background: #cfcfcf;
      border: 1px solid #cfcfcf;
      color: #434343;

      &:hover {
        background: darken(#cfcfcf, 50%);
        color: #fff;
      }
    }

    &__finish {
      border-radius: 4px;
      padding: 8px 16px;
      margin-left: 16px;
      background: #8e36b7;
      border: 1px solid #8e36b7;
      color: #fff;
      transition: 0.2s all;

      &:hover {
        background: lighten(#8e36b7, 20%);
        border: 1px solid lighten(#8e36b7, 20%);
      }
    }
  }
}
</style>