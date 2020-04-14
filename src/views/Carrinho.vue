<template>
  <section id="shopping-cart">
    <div class="s-cart-content">
      <table class="rTable">
        <thead>
          <tr>
            <th>Produtos</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in productsInCart" :key="index">
          <tr>
            <td>
              <div class="col-b-products">
                <img
                  src="@/assets/images/garbage.svg"
                  width="18"
                  height="22"
                  @click="removeProductFromCart(index)"
                  alt="Delete Item"
                />
                <div class="product-info">
                  <span class="category">Eletrônicos</span>
                  <span class="prodt-name">
                    {{ item.name.substring(0, 30) }}
                  </span>
                </div>
              </div>
            </td>
            <td>
              <div class="col-b-qtd">
                <button class="minus-btn" @click="decrementProductQtd(index)">
                  -
                </button>
                <input
                  type="number"
                  name="qtd-prodt"
                  id="qtd-prodt-cart"
                  min="1"
                  v-model.number="item.quantity"
                />
                <button class="plus-btn" @click="incrementProductQtd(index)">
                  +
                </button>
              </div>
            </td>
            <td>
              <div class="col-b-value">
                <strong>{{ item.price | currency }} </strong>
                à vista ou 10x {{ parseFloat(item.price) / 0.01 }}
              </div>
            </td>
            <td>
              <div class="col-b-total">
                <span>
                  <strong>
                    {{ (parseFloat(item.preco) * item.quantity) | currency }}
                  </strong>
                  à vista ou 10x
                  {{
                    ((parseFloat(item.preco) * item.quantity) / 0.1) | currency
                  }}
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="s-footer">
        <div class="col-f-pay">
          <div class="full-pay">
            <span class="pay-type">Total à vista</span>
            <span class="price">{{ totalPrice | currency }}</span>
          </div>
        </div>
        <div class="col-f-price">
          <div class="divided-pay">
            <span class="pay-type">Total Parcelado</span>
            <div class="pay-info">
              em até
              <strong>10x {{ (totalPrice / 0.1) | currency }}</strong>
              <br />(Total {{ totalPrice | currency }})
            </div>
          </div>
        </div>
      </div>
      <div class="cart-purchase">
        <div class="clean-cart" @click="clearShoppingCart">
          <img
            src="@/assets/images/garbage.svg"
            alt="clean cart"
            width="18"
            height="22"
          />
          <span>Limpar Carrinho</span>
        </div>
        <div class="action-btns">
          <router-link to="/" class="keep-buying">
            <button>Continuar comprando</button>
          </router-link>
          <router-link to="/checkout">
            <button class="purchase">Concluir compra</button>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Carrinho',
  computed: {
    ...mapState({ productsInCart: state => state.carrinho.productsCart }),

    ...mapGetters(['totalPrice'])
  },

  methods: {
    ...mapActions([
      'removeProductFromCart',
      'clearShoppingCart',
      'incrementProductQtd',
      'decrementProductQtd'
    ])
  }
};
</script>