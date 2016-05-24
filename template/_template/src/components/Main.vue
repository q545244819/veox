<template>
  <div class="main">
    <p>This is main</p>
    <slot></slot>
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
  .main {
    margin-left: 215px;
    border: 1px solid blue;
  }
</style>