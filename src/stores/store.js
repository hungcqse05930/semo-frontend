import Vue from 'vue';
import Vuex from 'vuex';
// import router from 'vue-router'
// import { router } from '../router/index.js'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate"
import VueRouter from 'vue-router';

Vue.use(Vuex);
Vue.use(VueRouter)

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        // token: VueCookie.get('token') || null
        token: null,
        user: null
    },
    getter: {
        token: state => state.token,
        user: state => state.user
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_USER: (state, user) => {
            state.user = user
        },
        DESTROY_TOKEN(state) {
            state.token = null
        }
    },
    actions: {
        LOGIN: ({ commit }, user) => {
            return new Promise((ressolve, reject) => {
                axios.post(`/user/login`, user)
                    .then(response => {
                        if (response.status === 200) {
                            commit('SET_TOKEN', response.data.token)
                            commit('SET_USER', response.data.userId)
                        }
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        LOGOUT: (context) => {
            if (context.mutations.LOGGED_IN) {
                // localStorage.removeItem('token')
                context.commit('DESTROY_TOKEN')
            }
        }
    }
});