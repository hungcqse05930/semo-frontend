import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Buefy from 'buefy'
import router from './router'
import store from './stores/store'
import axios from 'axios'
import VueRouter from 'vue-router'
import { fb, storage } from './firebase'
import http from 'http'

// import VueCookie from 'vue-cookie'

// set default axios location
axios.defaults.baseURL = "http://localhost:3003/"

/*eslint-disable */
// init Firebase

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Buefy)
Vue.use(axios)
Vue.use(Vuex)
Vue.use(http)
// Vue.use(VueCookie)

// custom components

new Vue({
  router,
  store,
  fb,
  storage,
  render: h => h(App)
}).$mount('#app')
