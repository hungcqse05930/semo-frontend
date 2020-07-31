import Vue from 'vue';
import Vuex from 'vuex';
import UIModule from './modules/ui';
import User from './modules/user';
import VueCookie from 'vue-cookie'

Vue.use(VueCookie)
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        ui: UIModule,
        user: User
    }
});