<template lang="pug">
    .card-list
        .card-list__item
            strong.card-list__title.mx-3 Produtos
            strong.card-list__title.mx-3 QUANTIDADE
            strong.card-list__title.mx-4 VALOR UNITÁRIO
            strong.card-list__title.mx-2 TOTAL

        CardProduct(
            v-for="(p, i) in products"
            v-bind:key="i"
            :id="p.id"
            :name="p.name"
            :category="p.category"
            :quantity="p.quantity"
            :price="p.price"
            :total="p.total"
        )


        .card-list__total
            span.card-list__total-label.mx-10.df-9.md-8.ph-2 Total à vista

            span.card-list__total-value.mx-2.df-3.md-4.ph-2 {{ total.a_vista.toLocaleString("pt-br", { style: "currency", currency: "BRL" }) }}

        .card-list__total.-last(v-if="total.parcelado")
            span.card-list__total-label.mx-10.df-9.md-8.ph-2 Total parcelado

            span.card-list__total-parc.mx-2.df-3.md-4.ph-2 em até <strong>10x {{ total.parcelado.toLocaleString("pt-br", { style: "currency", currency: "BRL" }) }}</strong> <br />(Total de {{ total.a_vista.toLocaleString("pt-br", { style: "currency", currency: "BRL" }) }})


        .card-list__btns-wrap
            button.card-list__btn.-clean(
                @click="clean_cart"
            )
                svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 24" width="21" height="24")
                    path(
                        fill-rule="evenodd"
                        fill="currentColor"
                        d="m18.7 4.1c0.1 0 0.3 0.2 0.3 0.4 0 0.2-0.2 0.3-0.3 0.3h-0.8l-0.6 16.4c-0.1 0.6-0.4 1.8-1.8 1.8h-10c-1.4 0-1.7-1.2-1.7-1.8l-0.7-16.4h-0.7c-0.2 0-0.4-0.1-0.4-0.3 0-0.2 0.2-0.4 0.4-0.4h4.2c0.1-0.4 0.2-1.2 0.7-1.6q0.4-0.5 1.1-0.5h3.5q0.7 0 1.1 0.5c0.5 0.4 0.6 1.2 0.7 1.6h5zm-11.4 15.7c0 0.2-0.1 0.4-0.3 0.4-0.2 0-0.4-0.2-0.4-0.4v-11.8c0-0.2 0.2-0.3 0.4-0.3 0.2 0 0.3 0.1 0.3 0.3zm3.6 0c0 0.2-0.2 0.4-0.4 0.4-0.2 0-0.4-0.2-0.4-0.4v-11.7c0-0.2 0.2-0.4 0.4-0.4 0.2 0 0.4 0.2 0.4 0.4zm3.5 0c0 0.2-0.2 0.4-0.4 0.4-0.1 0-0.3-0.2-0.3-0.4v-11.7c0-0.2 0.2-0.4 0.3-0.4 0.2 0 0.4 0.2 0.4 0.4zm-6.6-16.9q0.2-0.2 0.6-0.2h3.5q0.4 0 0.6 0.2c0.3 0.3 0.4 0.8 0.5 1.2h-5.7c0.1-0.4 0.2-0.9 0.5-1.2zm0 0"
                    )
                
                span Limpar carrinho


            router-link.card-list__btn.-back(to="/") Continuar comprando

            router-link.card-list__btn.-finish(to="/checkout") Concluir compra

                


        
</template>
<script>
import CardProduct from './CartProduct.vue'
export default {
    name: 'ListCart',
    components: {
        CardProduct
    },
    props: {
        cart: {
            type: Array,
            default(){ return [] }
        },
    },
    methods: {
        clean_cart() {
            this.$store.dispatch( 'cart/action_clean_cart', {} )
            location.href = '/'
        }
    },
    computed: {
        products(){
            const products = this.$store.state.products.products
            if(products && products.length > 0) {
                const cart = this.cart.map(p =>{
                    const product = products.filter( pro => pro.id === p.id_product )[0]
                    const { id, category, name, price } = product
                    
                    const price_unit = price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                    })
                    const parcela_dez_vezes = (price / 10).toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                    })
                    const price_total = price * p.quantity
                    const price_total_str = price_total.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                    })
                    const total_parcelado_dez_vezes = (price_total / 10).toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                    })
                    
                    const product_cart = {
                        id,
                        category,
                        name,
                        quantity: p.quantity,
                        price: {
                            avista: price_unit,
                            parcela: parcela_dez_vezes
                        },
                        total: {
                            avista: price_total_str,
                            parcela: total_parcelado_dez_vezes
                        }
                    }
                    return product_cart
                })
                return cart
            } else {
                return []
            }
        },
        total() {
            const products = this.$store.state.products.products
            console.log({ products })
            if(this.cart.length > 0 && products && products.length > 0) {
                const total = this.cart.map(p =>{
                    const product = products.filter( pro => pro.id === p.id_product )[0]
                    const { price } = product
                    const { quantity } = p
                    return price * quantity
                })

                const a_vista = total.reduce( (t, n) => t + n )
                const parcelado = a_vista > 100 ? (a_vista / 10) : null 
                return { a_vista, parcelado }
            } else {
                return { a_vista: 0, parcelado: null }
            }
        }
    }
}
</script>