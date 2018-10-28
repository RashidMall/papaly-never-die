<template>
  <div id="app" class="container">
    <MainBoard />
  </div>
</template>

<script>
import MainBoard from './components/MainBoard.vue'

export default {
  name: 'app',
  components: {
    MainBoard
  }
}
</script>

<style>
body {
  background-color: #eeeeee;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
