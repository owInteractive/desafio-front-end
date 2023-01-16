<template lang="pug">
    .products-list(v-if="posts")
        div.products-list__page
            CardPost(
                v-for="post in posts"
                v-bind:key="post.id"
                :id_product="post.id"
                :title="post.name"
                :category="post.category" 
                :description="post.description"
                :price="post.price"
                :thumb="post.imageUrl"
            )

</template>
<script>
import CardPost from './CardPost'

export default {
    name: 'ListPosts',
    components: {
        CardPost
    },
    props: {
        posts: {
            type: Array,
            default(){ return [] }
        },
    },
}
</script>