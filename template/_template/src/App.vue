<template>
  <div id="app">
    <v-header></v-header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import vHeader from './components/Header.vue'
  import Main from './components/Main.vue'

  export default {
    replace: false,
    components: {
      vHeader,
      Main
    }
  }
</script>

<style lang="less">
  @import './lib/css/normalize.css';

  body {
    background: #DDDDDD;
    font-family: Helvetica, sans-serif;
  }
  #app {
    max-width: 850px;
    margin: 0 auto;
  }
</style>
