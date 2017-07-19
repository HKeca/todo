import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import itemEdit from '@/components/itemEdit/itemEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/edit',
      name: 'itemEdit',
      component: itemEdit
    }
  ]
})
