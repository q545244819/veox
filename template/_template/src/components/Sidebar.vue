<template>
  <div class="sidebar">
    <p>sidebar</p>
    <nav>
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
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 200px;
    height: 100%;
    border: 1px solid red;
  }
</style>