<template>
  <div class="header">
    <h1 class="title">
      <a v-link="{ path: '/articles' }">VEOX BLOG</a>
    </h1>
    <nav class="navbar">
      <a v-link="{ path: '/articles' }">Articles</a>
      <a v-link="{ path: '/about' }">About</a>
    </nav>
  </div> 
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="less" scoped>
  .header {
    overflow: hidden;
    margin: 25px 0;
    padding: 0 6px;
  }
  
  .title {
    float: left;
    margin: 0;
    
    a {
      color: #444444;
      
      &:hover {
        text-decoration: underline;
        color: #000000;
      }
    }
  }

  .navbar {
    transform: translateY(15px);
    float: right;
        
    a {
      display: inline-block;
      margin-left: 15px;
      text-decoration: inherit;
      font-size: 18px;
      color: #444444;
      
      &:hover {
        text-decoration: underline;
        color: #000000;
      }
    }
  }
</style>