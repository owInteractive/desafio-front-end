<template>
    <div class="m-grid m-grid--hor m-grid--root m-page">
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
