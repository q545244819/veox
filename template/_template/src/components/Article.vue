<template>
  <h1 v-if="$route.path !== '/about'" class="title" v-text="$route.params.title"></h1>
  <h1 v-else class="title">About Me!</h1>
  <p v-if="$route.path !== '/about'" class="date">Article Post Time: <span v-text="$route.params.date"></span></p>
  <div class="markdown-body" v-html="html"></div>
  <!-- 多说评论框 start -->
  <div class="ds-thread" data-thread-key="{{ duoshuo.key }}" data-title="{{ duoshuo.title }}" data-url="{{ duoshuo.url }}"></div>
  <!-- 多说评论框 end -->
</template>

<script>
  export default {
    data() {
      return {
        html: '',
        duoshuo: {
          key: '',
          title: '',
          url: ''
        }
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
          this.duoshuo.key = $route.path !== '/about' ? `${params.date}/${params.title}` : 'about'
          this.duoshuo.title = $route.path !== '/about' ? params.title : 'about'
          this.duoshuo.url = location.href

          DUOSHUO.EmbedThread(document.querySelector('.ds-thread'))
        })
        .catch(err => {
          console.error(err)
        })
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