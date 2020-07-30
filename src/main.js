import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3003/"

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
