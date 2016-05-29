<template>
  <div class="markdown-body" v-html="html"></div>
</template>

<script>
  export default {
    data() {
      return {
        html: ''
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
    }
  }
</script>

<style lang="less" scoped>
</style>