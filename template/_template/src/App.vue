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
  @import './lib/css/github-markdown.css';

  body {
    background: #eee;
    font-family:"Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #app {
    max-width: 850px;
    margin: 0 auto;
  }
</style>
