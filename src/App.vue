<template>
  <div id="app">
    <TemplateBody>
      <router-view />
    </TemplateBody>
  </div>
</template>

<script>
import TemplateBody from "@/components/TemplateBody";
export default {
  name: 'App',
  components: {
    TemplateBody
  }
}
</script>

<style>
@font-face {
  font-family: "SourceSansPro-Bold";
  src:url("./assets/fonts/SourceSansPro-Bold.ttf") format("truetype");
}
@font-face {
  font-family: "SourceSansPro-Black";
  src: url("./assets/fonts/SourceSansPro-Black.ttf") format("truetype");
}
@font-face {
  font-family: "SourceSansPro-Regular";
  src: url("./assets/fonts/SourceSansPro-Regular.ttf") format("truetype");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
