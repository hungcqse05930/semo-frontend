import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Buefy from 'buefy'
import router from './router'
import store from './stores/store'
import axios from 'axios'
import VueRouter from 'vue-router'
// import VueCookie from 'vue-cookie'

axios.defaults.baseURL = "http://localhost:3003/"

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Buefy)
Vue.use(axios)
Vue.use(Vuex)
// Vue.use(VueCookie)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
