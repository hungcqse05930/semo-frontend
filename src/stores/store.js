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
        user: null,
        new_user: {
            phone: '',
            name: '',
            dob: '',
            gender: '',
        },
        new_address: {
            province: '',
            district: '',
            ward: '',
            address_info: ''
        },
        new_identity: {
            front_img_url: '',
            back_img_url: '',
            name: '',
            number: '',
            date_dist: '',
        }
    },
    getter: {
        token: state => state.token,
        user: state => state.user,
        new_user: state => state.new_user,
        phone: state => state.new_user.phone
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
        },
        // SIGN UP
        SET_SIGN_UP_PHONE(state, phone) {
            state.new_user.phone = phone
        },
        // SET_SIGN_UP_
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

                        ressolve(true)
                    })
                    .catch(error => {
                        if (error.response.status === 500) {
                            error.message = "Có vẻ số điện thoại này chưa được đăng ký ở semo. Bạn hãy kiểm tra lại đi."
                        } else if (error.response.status === 401) {
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

            router.push({ path: '/' })
        },
        SEARCH: ({ commit }, keyword) => {
            commit('SET_USER', 2)
            console.log(keyword)
            router.push({ path: '/search/' + keyword.keyword })
        },
        SIGN_UP_PHONE: ({ commit }, user) => {
            commit('SET_SIGN_UP_PHONE', user.phone)
            router.push({ path: "/register/otp" });
        },
        SIGN_UP_PASSWORD: ({ commit, state, dispatch }, user) => {
            return new Promise(() => {
                axios.post('/user/signup', {
                    phone: state.new_user.phone,
                    password: user.password
                }).then(response => {
                    console.log(state.new_user.phone)
                    console.log(state.new_user)
                    dispatch("LOGIN", {
                        phone: state.new_user.phone,
                        password: user.password
                    }).then(() => {
                        commit("SET_USER", response.user_id)
                    })
                })
            })
        }
    }
});