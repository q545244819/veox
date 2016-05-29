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
  
  @font-face {font-family: 'webfont';
    src: url('//at.alicdn.com/t/wat25i3qknws714i.eot'); /* IE9*/
    src: url('//at.alicdn.com/t/wat25i3qknws714i.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('//at.alicdn.com/t/wat25i3qknws714i.woff') format('woff'), /* chrome、firefox */
    url('//at.alicdn.com/t/wat25i3qknws714i.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('//at.alicdn.com/t/wat25i3qknws714i.svg#思源黑体-极细') format('svg'); /* iOS 4.1- */
  }


  body {
    background: #DDDDDD;
    font-family:"webfont", Helvetica, sans-serif;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  #app {
    max-width: 850px;
    margin: 0 auto;
  }
</style>
