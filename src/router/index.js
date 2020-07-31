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
//
// import UserInformationFile from '../views/UserInformationFile.vue'
//
import UserInformationResetPassword from '../views/UserInformationResetPassword.vue'
import UserInformationAddress from '../views/UserInformationAddress.vue'
import UserInformationAccuracy from '../views/UserInformationAccuracy.vue'
import Search from '../views/SearchPage.vue'
import CreateNewProduct from '../views/CreateNewProduct'
import CreateNewProductForTree from '../views/CreateNewProductForTree'
import MediationDashboardProduct from '../views/MediationDashboardProduct.vue'
import CencorProductMediation from '../views/CencorProductMediation.vue'
import MediationDashboardNameProduct from '../views/MediationDashboardNameProduct.vue'
import PlaceBid from '../views/PlaceBid.vue'
import MediationDashboardHome from '../views/MediationDashboardHome.vue'
import CreateNewProductAddProduct from '../views/CreateNewProductAddProduct.vue'
import CreateNewProductSuccess from '../views/CreateNewProductSuccess.vue'
import CreateNewProductNotification from '../views/CreateNewProductNotification.vue'
import Affair from '../views/Affair.vue'
import AffairEditContract from '../views/AffairEditContract.vue'
import UserBidAuction from '../views/UserBidAuction.vue'
import UserWallet from '../views/UserWallet.vue'
import UserBidContract from '../views/UserBidContract.vue'
import UserBidBuy from '../views/UserBidBuy.vue'
import AdminWallet from '../views/AdminWallet.vue'
import AdminDashboardNameProduct from '../views/AdminDashboardNameProduct.vue'
import AdminDashboardProduct from '../views/AdminDashboardProduct.vue'

import UserInformationTESTFILE from '../views/UserInformationTESTFILE.vue'

// import { component } from 'vue/types/umd';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Trang chủ',
    component: Home
  },
  {
    path: '/auction/latest',
    name: 'Mới nhất',
    component: () => import('../views/AuctionLatest.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: Search
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
  //User information file
  // {
  //   path: '/userinformationfile',
  //   name: 'UserInformationFile',
  //   component: UserInformationFile
  // },
  {
    path: '/resetpassword',
    name: 'UserInformationResetPassword',
    component: UserInformationResetPassword
  },
  {
    path: '/userinformationaddress',
    name: 'UserInformationAddress',
    component: UserInformationAddress
  },
  {
    path: '/createnewproduct',
    name: 'CreateNewProduct',
    component: CreateNewProduct
  },
  {
    path: '/createnewproductfortree',
    name: 'CreateNewProductForTree',
    component: CreateNewProductForTree
  },
  {
    path: '/userinformationaccuracy',
    name: 'UserInformationAccuracy',
    component: UserInformationAccuracy
  },
  {
    path: '/mediationdashboardproduct',
    name: 'MediationDashboardProduct',
    component: MediationDashboardProduct
  },
  {
    path: '/cencorproductmediation',
    name: 'CencorProductMediation',
    component: CencorProductMediation
  },
  {
    path: '/mediationdashboardnameproduct',
    name: 'MediationDashboardNameProduct',
    component: MediationDashboardNameProduct
  },
  {
    path: '/placebid',
    name: 'PlaceBid',
    component: PlaceBid
  },
  {
    path: '/mediationdashboardhome',
    name: 'MediationDashboardHome',
    component: MediationDashboardHome
  },
  {
    path: '/createnewproductaddproduct',
    name: 'CreateNewProductAddProduct',
    component: CreateNewProductAddProduct
  },
  {
    path: '/createnewproductsuccess',
    name: 'CreateNewProductSuccess',
    component: CreateNewProductSuccess
  },
  {
    path: '/createnewproductnotification',
    name: 'CreateNewProductNotification',
    component: CreateNewProductNotification
  },
  {
    path: '/affair',
    name: 'Affair',
    component: Affair
  },
  {
    path: '/affaireditcontract',
    name: 'AffairEditContract',
    component: AffairEditContract
  },
  {
    path: '/userbidauction',
    name: 'UserBidAuction',
    component: UserBidAuction
  },
  {
    path: '/userwallet',
    name: 'UserWallet',
    component: UserWallet
  },
  {
    path: '/userbidcontract',
    name: 'UserBidContract',
    component: UserBidContract
  },
  {
    path: '/userbidbuy',
    name: 'UserBidBuy',
    component: UserBidBuy
  },
  {
    path: '/userinformationtest',
    name: 'UserInformationTESTFILE',
    component: UserInformationTESTFILE
  },
  {
    path: '/adminwallet',
    name: 'AdminWallet',
    component: AdminWallet
  },
  {
    path: '/admindashboardnameproduct',
    name: 'AdminDashboardNameProduct',
    component: AdminDashboardNameProduct
  },
  {
    path: '/admindashboardproduct',
    name: 'AdminDashboardProduct',
    component: AdminDashboardProduct
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
