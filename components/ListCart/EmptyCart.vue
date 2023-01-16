<template lang="pug">
    .empty-carty
        h2 Seu carrinho está vazio 
        
        p Que tal navegar pelas milhares de ofertas e achar uma especial para você?

        router-link.empty-carty__link(to="/") ver produtos

</template>
<script>
export default {
    name: 'EmptyCart',
}
</script>