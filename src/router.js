import Vue from 'vue'
import Router from 'vue-router'

import demo1 from './views/demo1.vue'
import demo2 from './views/demo2.vue'
import demo3 from './views/demo3.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/demo1',
      name: '.passive',
      component: demo1
    },
    {
      path: '/demo2',
      name: '.sync',
      component: demo2
    },
    {
      path: '/demo3',
      name: 'async component',
      component: demo3
    }
  ]
})