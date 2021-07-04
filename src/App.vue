<template>
  <div id="app">
    <H264ToFmp4 msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import H264ToFmp4 from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    H264ToFmp4,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
