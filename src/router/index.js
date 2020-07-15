import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import RegisterPhoneNumber from '../views/RegisterPhoneNumber.vue'
import RegisterOTP from '../views/RegisterOTP.vue'
import CreatePassword from '../views/CreatePassword.vue'
import ConfirmCitizen from '../views/ConfirmCitizen.vue'
import ConfirmInformation from '../views/ConfirmInformation.vue'
import SelectPicture from '../views/SelectPicture.vue'
import SuccessRegister from '../views/SuccessRegister.vue'
import NameProduct from '../views/NameProduct.vue'
import UserInformation from '../views/UserInformation.vue'
import ResetPassword from '../views/ResetPassword.vue'

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
  },
  {
    path: '/registerstep4',
    name: 'ConfirmInformation',
    component: ConfirmInformation
  },
  {
    path: '/registerstep5',
    name: 'ConfirmCitizen',
    component: ConfirmCitizen

  },
  {
    path: '/registerstep6',
    name: 'SelectPicture',
    component: SelectPicture

  },
  {
    path: '/registerstep7',
    name: 'SuccessRegister',
    component: SuccessRegister
  },
  {
    path: '/productstep1',
    name: 'NameProduct',
    component: NameProduct
  },
  {
    path: '/userinformation',
    name: 'UserInformation',
    component: UserInformation
  },
  {
    path: '/resetpassword',
    name: 'ResetPassword',
    component: ResetPassword
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
