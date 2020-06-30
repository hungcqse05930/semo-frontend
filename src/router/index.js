import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import RegisterPhoneNumber from '../views/RegisterPhoneNumber.vue'
import RegisterOTP from '../views/RegisterOTP.vue'
import CreatePassword from '../views/CreatePassword.vue'

// import { component } from 'vue/types/umd';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'RegisterPhoneNumber',
    component: RegisterPhoneNumber
  },
  {
    path: '/registerstep2',
    name: 'RegisterOTP',
    component: RegisterOTP
  },
  {
    path: '/registerstep3',
    name: 'CreatePassword',
    component: CreatePassword
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
