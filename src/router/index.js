import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/pages/Home'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home/:id',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      redirect: '/HelloWorld'
    }
  ]
})
