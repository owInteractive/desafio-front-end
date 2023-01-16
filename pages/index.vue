<template lang="pug">
    LayoutDefault
        VueSlickCarousel(v-bind="slick")
            div(
                v-for="banner in banners"
                v-bind:key="banner.image"
            )
                img(:src="banner.image", :alt="banner.alt")
            
        main.container
            section.page-section
                SearchForm(v-on:search-product="changeSearch")
                
                ListPosts(
                    v-if="products"
                    :posts="products"
                )

                Preload(v-else)

            


</template>

<script>
import LayoutDefault from '@/components/Layouts/LayoutDefault'
import ListPosts from '@/components/ListPosts/ListPost'
import SearchForm from '@/components/SearchForm'
import Preload from '@/components/Preload/Index'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
    name: 'IndexPage',
    components: {
        LayoutDefault,
        ListPosts,
        SearchForm,
        Preload,
        VueSlickCarousel
    },
    data(){
        return {
            search: '',
            banners: [
                {
                    image: require('@/assets/img/banner_1.jpg'),
                    alt: 'NOTEBOOKS As melhores ofertas'
                },
                {
                    image: require('@/assets/img/banner_2.jpg'),
                    alt: 'Smartphone Confira as últimas novidades'
                }
            ],
            slick: {
                dots: true,
                arrows: false,
                dotsClass: "slick-dots",
                edgeFriction: 0.35,
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    },
    methods: {
        changeSearch(newValue) {
            this.search = newValue
        },
    },
    created() {},
    computed: {
        products() {
            const products = this.$store.state.products.products
            const search_input = this.search.toLowerCase().trim()
            if(search_input === "") return products
            const filter_search = products.filter(p => {
                const name = p.name.toLowerCase()
                return name.indexOf(search_input) > -1
            })
            return filter_search
        },
    }
}
</script>
