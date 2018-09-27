import Vue from 'vue'
import Router from 'vue-router'
import shopingMall from '@/components/pages/shopingMall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shopingMall',
      component: shopingMall
    }
  ]
})
