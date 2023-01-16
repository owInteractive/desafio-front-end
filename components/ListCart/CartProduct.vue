<template lang="pug">
    .card-list__item
        .card-list__col.mx-3.md-6
            button.card-list__btn-remove(
                @click="remove_product(id)"
            )
                svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 24" width="21" height="24")
                    path(
                        fill-rule="evenodd"
                        fill="currentColor"
                        d="m18.7 4.1c0.1 0 0.3 0.2 0.3 0.4 0 0.2-0.2 0.3-0.3 0.3h-0.8l-0.6 16.4c-0.1 0.6-0.4 1.8-1.8 1.8h-10c-1.4 0-1.7-1.2-1.7-1.8l-0.7-16.4h-0.7c-0.2 0-0.4-0.1-0.4-0.3 0-0.2 0.2-0.4 0.4-0.4h4.2c0.1-0.4 0.2-1.2 0.7-1.6q0.4-0.5 1.1-0.5h3.5q0.7 0 1.1 0.5c0.5 0.4 0.6 1.2 0.7 1.6h5zm-11.4 15.7c0 0.2-0.1 0.4-0.3 0.4-0.2 0-0.4-0.2-0.4-0.4v-11.8c0-0.2 0.2-0.3 0.4-0.3 0.2 0 0.3 0.1 0.3 0.3zm3.6 0c0 0.2-0.2 0.4-0.4 0.4-0.2 0-0.4-0.2-0.4-0.4v-11.7c0-0.2 0.2-0.4 0.4-0.4 0.2 0 0.4 0.2 0.4 0.4zm3.5 0c0 0.2-0.2 0.4-0.4 0.4-0.1 0-0.3-0.2-0.3-0.4v-11.7c0-0.2 0.2-0.4 0.3-0.4 0.2 0 0.4 0.2 0.4 0.4zm-6.6-16.9q0.2-0.2 0.6-0.2h3.5q0.4 0 0.6 0.2c0.3 0.3 0.4 0.8 0.5 1.2h-5.7c0.1-0.4 0.2-0.9 0.5-1.2zm0 0"
                    )
            .card-list__wrap-name 
                span.card-list__categ {{ category }}
                h3.card-list__name-product {{  name  }}

        .card-list__col.mx-3.md-6
            .card-list__wrap-quantity
                button.card-list__btn-quantity.-left(
                    @click="edit_qtd(quantity-1, id)"
                ) -

                input.card-list__input-quantity(
                    type="tel" 
                    :data-id-product="id",
                    :value="quantity"
                    @input="change_qtd"
                )

                button.card-list__btn-quantity.-right(
                    @click="edit_qtd(quantity+1, id)"
                ) +
            
        .card-list__col.mx-4.md-6
            span.card-list__price.-unit
                <strong>{{ price.avista }}</strong> à vista <br /> ou 10x {{ price.parcela }}

        .card-list__col.mx-2.md-6
            span.card-list__price.-total
                <strong>{{ total.avista }}</strong> à vista <br /> ou 10x {{ total.parcela }}

</template>
<script>

export default {
    name: 'CartProduct',
    props: {
        id: Number,
        name: String,
        category: String,
        quantity: Number,
        price: Object,
        total: Object,
    },
    methods: {
        edit_qtd(quantity, id_product) {
            if(quantity < 1) return
            
            const obj_prod_edit = { quantity, id_product }
            this.$store.dispatch( 'cart/action_change_qtd', { obj_prod_edit } )
        },
        change_qtd(e) {
            const { value, dataset } = e.target;
            const idProd = +dataset.idProduct;
            this.edit_qtd(value, idProd)
        },
        remove_product(id_product){
            if(!id_product) return
            this.$store.dispatch( 'cart/action_remove', { id_product } )
        }
    },
}
</script>