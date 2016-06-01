import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAsyncData from 'vue-async-data'

import App from './App.vue'
import Config from './config'

Vue.use(VueRouter)
Vue.use(VueAsyncData)

const router = new VueRouter()
const ds = document.createElement('script')

window.duoshuoQuery = {short_name: Config.duoshuo}
ds.type = 'text/javascript';
ds.async = true;
ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
ds.charset = 'UTF-8';
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);

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
