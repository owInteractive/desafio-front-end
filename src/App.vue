<template>
    <div id="app">
        <BlockUI v-if="display" style="width: 30px">
            <div align="center">
                <img src="@/assets/logo.png" alt="" width="60">
                <div class="loader"></div>
            </div>
        </BlockUI>
        <theme>
            <router-view/>
        </theme>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        display: false,
      }
    },
    created () {
      let self = this
      this.$events.on('DisplayBlockUI', eventData => self.displayBlockUI(eventData))
    },
    methods: {
      displayBlockUI (evt) {
        this.display = evt
      }
    }
  }

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
