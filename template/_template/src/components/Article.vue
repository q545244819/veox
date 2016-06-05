<template>
  <h1 v-if="$route.path !== '/about'" class="title" v-text="$route.params.title"></h1>
  <h1 v-else class="title">About Me!</h1>
  <p v-if="$route.path !== '/about'" class="date">
    Article Post Time: 
    <span v-text="$route.params.date"></span>
    tag:
    <span v-text="$route.params.tag"></span>
  </p>
  <div class="markdown-body" v-html="html"></div>
  <duoshuo :key="$route.params.title"
           :title="$route.params.title"
           :url="url"></duoshuo>
</template>

<script>
  import Duoshuo from './Duoshuo.vue'

  export default {
    data() {
      return {
        html: '',
        url: location.href
      }
    },
    ready() {
      const $route = this.$route
      const params = $route.params
      const path = $route.path !== '/about' ? 
        `../../posts/${params.date}/${params.title}.html` :
        `../../posts/about.html`
      
      fetch(path)
        .then(response => {
          return response.text()
        })
        .then(html => {
          this.html = html
        })
        .catch(err => {
          console.error(err)
        })
    },
    components: {
      Duoshuo
    }
  }
</script>

<style lang="less" scoped>
  .title,
  .date {
    text-align: center;
  }
  
  .date {
    font-size: 16px;
    color: #ccc;
  }
</style>