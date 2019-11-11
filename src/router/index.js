import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = () => import ('../view/home/home')
const cart = () => import ('../view/cart/cart')
const categery = () => import ('../view/categery/categery')
const profile = () => import ('../view/profile/profile')

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
