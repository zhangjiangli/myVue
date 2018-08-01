import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/Index'
// import Header from '@/components/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }/* ,
    {
      path: '/header',
      name: 'header',
      component: Header
    } */
  ]
})
