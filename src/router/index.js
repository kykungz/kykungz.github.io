import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/sections/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
