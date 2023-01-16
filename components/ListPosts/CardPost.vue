<template lang="pug">
    article.card-post.mx-4.md-6.sm-6
        .card-post__container
            figure.card-post__figure(:class="!thumb ? '-silver' : ''")
                img(:src="thumb" :alt="title" v-if="thumb")
                img(:src="alt_thumb" :alt="title" v-else)

            .card-post__text
                span.card-post__categ {{ category }}
                h3.card-post__title {{ title }}

                div.card-post__excerpt {{ description }}

                strong.card-post__price {{ priceReal }}

            a.card-post__link(@click.prevent="addProd(id_product)") Adicionar ao carrinho


</template>
<script>
export default {
    props: {
        id_product: Number,
        title: String,
        category: String,
        description: String,
        price: Number,
        thumb: String,

    },
    data() {
        return{
            alt_thumb: require('@/assets/img/logo.jpg'),
        }
    },
    methods: {
        addProd(id_product) {            
            if( !id_product ) return
            const obj_prod = { id_product, quantity: 1 }
            this.$store.dispatch("cart/action_add_cart", { obj_prod });

            location.href = '/cart'
        },
    },
    computed: {
        priceReal() {
            return this.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
            });
        }
    }
}
</script>