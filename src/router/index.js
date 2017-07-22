import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import itemEdit from '@/components/itemEdit/itemEdit';
import about from '@/components/About';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/edit/:id',
      name: 'itemEdit',
      component: itemEdit
    },
    {
      path: '/about',
      name: 'About',
      component: about
    }
  ]
});
