<template>
    <div>
        <p>lista de produtos</p>
        <p>Lista cart</p>
        <div class="form-group m-form__group mt-4">
            <div class="m-input-icon m-input-icon--left m-input-icon--right">
                <input type="text" @input="filter = $event.target.value"
                       name="search" id="search" autocomplete="off"
                       class="form-control m-input m-input--pill m-input--air"
                       placeholder="Pesquisar">
                <span class="m-input-icon__icon m-input-icon__icon--left">
                                <span>
                                    <i class="la la-search"></i>
                                </span>
                            </span>
            </div>
        </div>
        <list-products :products="productsFiltered"/>
    </div>
</template>
<script>
  import ProductService from "@/services/ProductService"
  import ListProducts from "@/components/products/List"
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'ProductList',
    components: {ListProducts},
    data () {
      return {
        productsList: [],
        filter: ''
      }
    },
    mounted () {
      this.getProductsList()
    },
    watch: {
      productsList () {
        return this.productsList
      }
    },
    computed: {
      productsFiltered () {
        if (this.filter) {
          let exp = new RegExp(this.filter.trim(), 'i')
          return this.productsList.filter(product => exp.test(product.name))
        } else {
          return this.productsList
        }
      },
      ...mapGetters({
        products: 'getProducts',
      }),
      ...mapActions(['actionProducts']),
    },
    methods: {
      getProductsList () {
        this.actionProducts
        if (this.products.length === 0) {
          ProductService.get().then(response => {
            this.productsList = response.data
            this.$store.commit('GET_PRODUCTS', this.productsList)
          })
        } else {
          this.productsList = this.products
        }
      },
    },
  }
</script>
