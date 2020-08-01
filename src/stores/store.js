import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import router from '../router/index.js'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex);

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
        },
        DESTROY_USER(state) {
            state.user = null
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

                        router.push({ name: 'Trang chủ' })
                        ressolve(true)
                    })
                    .catch(error => {
                        if (error.response.status === 500){
                            error.message = "Có vẻ số điện thoại này chưa được đăng ký ở semo. Bạn hãy kiểm tra lại đi."
                        } else if (error.response.status === 401){
                            error.message = "Hãy kiểm tra mật khẩu của bạn nhé!"
                        }
                        reject(error)
                    })
            })
        },
        LOGOUT: ({ commit, state }) => {
            if (state.token !== null && state.user !== null) {
                // localStorage.removeItem('token')
                commit('DESTROY_TOKEN')
                commit('DESTROY_USER')
            }

            router.push({ path: '/'})
        },
        SEARCH: ({ commit }, keyword) => {
            commit('SET_USER', 2)
            console.log(keyword)
            router.push({ path: '/search/' + keyword.keyword })
        }
    }
});