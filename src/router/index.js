import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = () => import ('views/home/home')
const cart = () => import ('views/cart/cart')
const categery = () => import ('views/categery/categery')
const profile = () => import ('views/profile/profile')

export default new Router({
  routes: [
    {
      path: "/",
      redirect: '/home' 
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/categery',
      component: categery
    },
    {
      path: '/profile',
      component: profile
    }
    
  ],
  mode: 'history'
})
