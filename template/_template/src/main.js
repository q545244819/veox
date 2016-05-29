import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAsyncData from 'vue-async-data'

import App from './App.vue'

Vue.use(VueRouter)
Vue.use(VueAsyncData)

const router = new VueRouter()

router.map({
  '/articles': {
    component: resolve =>   {
      require(['./components/Articles.vue'], resolve)
    }
  },
  '/article/:date/:title': {
    name: 'article',
    component: resolve => {
      require(['./components/Article.vue'], resolve)
    }
  },
  '/about': {
    component: resolve => {
      require(['./components/Article.vue'], resolve)
    }
  },
})
router.redirect({
  '*': '/articles'
})
router.start(App, 'body')
