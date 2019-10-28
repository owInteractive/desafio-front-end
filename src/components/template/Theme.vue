<template>
    <div>
        <header-bar/>
        <div>
            <slot></slot>
        </div>
        <footer-bar/>
    </div>
</template>

<script>
  import HeaderBar from '@/components/template/Header'
  import FooterBar from '@/components/template/Footer'

  export default {
    name: 'Theme',
    components: {HeaderBar, FooterBar},
  }
</script>
