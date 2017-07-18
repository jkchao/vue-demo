import Vue from 'vue'
import Router from 'vue-router'

const demo1 = resolve => require(['./views/demo1.vue'], resolve)
const demo2 = resolve => require(['./views/demo2.vue'], resolve)

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
      name: 'demo3',
      component: demo1
    }
  ]
})