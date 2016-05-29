<template>
  <div class="main">
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
    padding: 5px 15px 15px;
    background: #ffffff;
    border-radius: 3px;
  }
</style>