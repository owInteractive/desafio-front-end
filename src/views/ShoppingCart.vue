<template>
    <div class="content">
        <b-container class="bv-example-row">
            <b-row>
                <b-col cols="3 title">PRODUTOS</b-col>
                <b-col cols="3 title">QUANTIDADE</b-col>
                <b-col cols="3 title">VALOR UNITÁRIO</b-col>
                <b-col cols="3 title">TOTAL</b-col>
            </b-row>

            <b-row :key="'cart' + index" v-for="(product, index) in cartProducts">
                <b-col>
                    <p class="sub-title" align="left">Eletrônicos</p>
                    <img @click="removeProductCart(index)" class="garbage" alt="garbage" title="Remover do carrinho"
                         src="/img/icons/garbage.svg">
                    <p class="text-bold" align="left">{{product.name.substring(0,50)}}</p>
                </b-col>
                <b-col>
                    <div class="tab-center-45">
                        <div class="number-input">
                            <input type="number" min="1" v-model="product.amount"
                                   @change="calculateTotalProduct(index)">
                        </div>
                        <br>
                    </div>
                </b-col>
                <b-col>
                    <div class="tab-center-45">
                        <span class="text-md-bold">R$ {{product.price}}</span> à vista <br>
                        ou 10x {{formataDinheiro(product.price,10)}}
                    </div>
                </b-col>
                <b-col>
                    <div class="tab-center-45">
                        <span class="text-md-bold">R$ {{product.total}}</span> à vista <br>
                        ou 10x {{formataDinheiro(product.total,10)}}
                    </div>
                </b-col>
            </b-row>
            <b-row class="no-border">
                <b-col cols="6"></b-col>
                <b-col cols="3">
                    <div class="tab-center-25 text-total">
                        <strong>TOTAL À VISTA</strong>
                    </div>
                </b-col>
                <b-col cols="3">
                    <div class="tab-center-25 text-lg-purple">R$ {{total}}</div>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="6"></b-col>
                <b-col cols="3">
                    <div class="tab-center-25 text-total">
                        <strong>TOTAL PARCELADO</strong>
                    </div>
                </b-col>
                <b-col cols="3">
                    <div class="tab-center-25">
                        em até <span class="text-md-bold">10x R$ {{formataDinheiro(total, 10)}}</span><br>
                        (Total R$ {{total}})
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <div class="row-btns">
            <div class="box-row-btns">
                <div class="btn-light-border" @click="clearCart">
                    <div class="float-content">
                        <img class="garbage" alt="garbage" title="Remover do carrinho"
                             src="/img/icons/garbage.svg">
                    </div>
                    <div class="float-content">
                        Limpar Carrinho
                    </div>
                </div>
            </div>
            <div class="box-row-btns">
                <router-link :to="{ name: 'products' }" tag="button" id="products" type="button" class="btn-gray">
                    Continuar comprando
                </router-link>
            </div>
            <div class="box-row-btns">
                <router-link :to="{ name: 'checkout' }" tag="button" id="checkout" type="button" class="btn-purple">
                    Concluir compra
                </router-link>
            </div>
            <div class="box-row-btns"></div>
        </div>
    </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'ShoppingCart',
    data () {
      return {
        total: 0
      }
    },
    mounted () {
      this.calculateTotal()
    },
    computed: {
      ...mapGetters({
        cartProducts: 'getProductsCart',
      }),
    },
    methods: {
      clearCart () {
        this.actionClearCart()
        this.calculateTotal()
        this.$toastr.success('Produtos removidos do carrinho.')
      },
      calculateTotalProduct (index) {
        this.cartProducts[index].total = this.formataDinheiro(parseInt(this.cartProducts[index].price.replace(/[^0-9]/g, '')) * parseInt(this.cartProducts[index].amount))
        this.calculateTotal()
      },
      calculateTotal () {
        this.total = this.cartProducts.reduce(function (prev, cur) {
          return prev + (parseInt(cur.price.replace(/[^0-9]/g, '')) * parseInt(cur.amount))
        }, 0);
        this.total = this.formataDinheiro(this.total)
        this.$store.commit('GET_PRODUCTS_CART', this.cartProducts)
      },
      formataDinheiro (int, parcel) {
        if (parcel && int) int = parseInt(parseInt(int.replace(/[^0-9]/g, '')) / parcel)
        var tmp = int + '';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if (tmp.length > 6)
          tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

        return tmp;
      },
      removeProductCart (index) {
        this.cartProducts.splice(index, 1)
        this.$store.commit('GET_PRODUCTS_CART', this.cartProducts)
        this.$toastr.success('Produto removido com sucesso.')
        this.calculateTotal()
      },
      ...mapActions(['actionProductsCart', 'actionClearCart']),
    }
  }
</script>
