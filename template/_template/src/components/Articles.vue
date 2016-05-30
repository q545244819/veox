<template>
  <div v-for="list in lists">
    <h2 class="date"><span v-text="$key"></span></h2>
    <ul class="list">
      <li v-for="item in list">
        <a v-text="item.title"
           v-link="{ name: 'article', params: { date: item.date, title: item.title } }"></a>
      </li>
    </ul>
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
  .date {
    font-weight: inherit;
    font-style:italic;
    color: #333;
    
    span {
      margin-left: 10px;
    }
  }

  .list {
    li {
      line-height: 2;
    }
    
    a {
      color: #444444;
      text-decoration: initial;
      
      &:hover {
        color: #003399;
        text-decoration: underline;
      }
    }
  }
</style>