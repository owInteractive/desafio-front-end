<template>
    <div>
        <div style="margin: 40px 0px 40px 0px">
            <section class="flex-search box-search">
                <div class="text-search">
                    Encontre seu produto
                </div>
                <div class="form-group">
                    <input type="text" @input="filter = $event.target.value"
                           name="search" id="search" autocomplete="off"
                           class="input-text"
                           placeholder="Pesquisar...">
                    <button type="submit">
                        <img src="@/assets/icons/magnifying-glass.svg" width="25" height="25">
                    </button>
                </div>
            </section>
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
