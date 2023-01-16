<template lang="pug">
    footer.footer
        .container
            .footer__top
                a.footer__logo.col(href="/" title="MKT Place")
                    img(:src="logo" alt="MKT Place")
                    
                    
                        
        
</template>
<script>

export default {
    name: 'Footer',
    data() {
        return {
            logo: require('@/assets/img/logo-footer.png'),
        }
    }
}
</script>
