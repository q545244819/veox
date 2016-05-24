<template>
  <div id="app">
    <sidebar></sidebar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar.vue'
  import Main from './components/Main.vue'

  export default {
    replace: false,
    components: {
      Sidebar,
      Main
    }
  }
</script>

<style lang="less">
  @import './lib/css/normalize.css';

  body {
    font-family: Helvetica, sans-serif;
  }
</style>
