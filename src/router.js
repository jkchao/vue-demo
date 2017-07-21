import Vue from 'vue'
import Router from 'vue-router'
import loadingCom from './components/loadingCom.vue'
import errorCom from './components/errCom.vue'

const demo1 = () => import('./views/demo1.vue')
const demo2 = () => import('./views/demo2.vue')
const demo3 = () => import('./views/demo3.vue')
const demo4 = () => import('./views/demo4.vue')
const demo5 = () => ({
  component: import('./views/demo5.vue'),
  loading: loadingCom,
  error: errorCom,
  delay: 100,
  timeout: 3000
})
const demo6 = () => import('./views/demo6.vue')
const demo7 = () => import('./views/demo7.vue')


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
      name: 'async component1',
      component: demo3
    },
    {
      path: '/demo4',
      name: 'async component2',
      component: demo4
    },
    {
      path: '/demo5',
      name: 'async component3',
      component: demo5
    },
    {
      path: '/demo6',
      name: 'demo6',
      component: demo6
    },
    {
      path: '/demo7',
      name: 'demo7',
      component: demo7
    }
  ]
})