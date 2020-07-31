// import axios from 'axios'
// import VueCookie from 'vue-cookie'

export default {
    state: {
        // token: VueCookie.get('token') || null
        token: null
    },
    getter: {
        LOGGED_IN(state){
            return state.token !== null
        }
    },
    mutations: {
        RETRIEVE_TOKEN(state, token) {
            state.token = token
        },
        DESTROY_TOKEN(state){
            state.token = null
        }
    },
    actions: {
        LOGIN: (context, credentials) => {
            return new Promise((ressolve, reject) => {
                this.$axios.post(`/user/login`, {
                    phone: credentials.phone,
                    password: credentials.password
                })
                    .then((response) => {
                        const token = response.data.token
                        // VueCookie.set('token', token)
                        // localStorage.setItem('token', token)
                        context.commit('RETRIEVE_TOKEN', token)
                        ressolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        LOGOUT: (context) => {
            if(context.mutations.LOGGED_IN) {
                // localStorage.removeItem('token')
                context.commit('DESTROY_TOKEN')
            }
        }
    }
}