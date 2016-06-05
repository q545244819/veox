<template>
  <div v-for="list in lists.dates">
    <h2 class="date"><span v-text="list"></span></h2>
    <ul class="list">
      <li v-for="item in lists.posts[list]">
        <a v-text="item.title"
           v-link="{ name: 'article', params: { date: item.date, title: item.title, tag: item.tag } }"></a>
        <a class="tag" 
           v-text="item.tag"
           v-link="{ name: 'articles', params: { tag: item.tag } }"></a>
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
    ready() {
      const params = this.$route.params
      let url = ''
      
      if (params.tag) {
        url = `../../tags/${params.tag}.json`
      } else {
        url = '../../posts/readme.json'
      }
      
      fetch(url)
        .then(response => {
          return response.json()
        })
        .then(lists => {
          this.lists = lists
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
</script>

<style lang="less" scoped>
  @primary_color: #337ab7;

  .tag (@color) {
    display: inline;
    padding: .2em .6em .3em;
    margin-left: 6px;
    background-color: @color;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;
    
    &:hover {
      color: #fff;
    }
  }

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
      font-size: 18px;
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
    
    .tag {
      cursor: pointer;
      
      .tag(@primary_color);
    }
  }
</style>