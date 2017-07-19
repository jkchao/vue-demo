import Vue from 'vue'
import Router from 'vue-router'

const demo1 = () => import ('./views/demo1.vue')
const demo2 = () => import ('./views/demo2.vue')
const demo3 = () => import ('./views/demo3.vue')

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