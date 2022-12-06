<template>
  <div class="home">
    <BannerLayout />
  </div>
</template>

<script>
import BannerLayout from '@/components/BannerLayout.vue'

export default {
  name: 'HomeView',
  components: { BannerLayout },
}
</script>

<style scoped lang="sass">

.home
  width: 100%
  height: 80%
  display: flex
  flex-direction: column 

</style>
