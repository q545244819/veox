<template>
  <div v-for="list in lists">
    <h3 v-text="$key"></h3>
    <a v-for="item in list"
       v-text="item.title"
       v-link="{ name: 'article', params: { date: item.date, title: item.title } }"></a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        lists: {}
      }
    },
    asyncData: (resolve, reject) => {
      fetch('../../posts/readme.json')
        .then(response => {
          return response.json()
        })
        .then(lists => {
          resolve({ lists })
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
</script>

<style lang="less" scoped>
</style>