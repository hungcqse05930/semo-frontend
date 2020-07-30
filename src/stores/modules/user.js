import axios from 'axios'

export default {
    state: {
        token: localStorage.getItem('token') || null
    },
    getter: {
        LOGGED_IN(state){
            return state.token !== null
        }
    },
    mutations: {
        RETRIEVE_TOKEN(state, token) {
            state.token = token
        }
    },
    actions: {
        LOGIN: (context, credentials) => {
            return new Promise((ressolve, reject) => {
                axios.post(`http://192.168.123.47:3003/user/login`, {
                    phone: credentials.phone,
                    password: credentials.password
                })
                    .then((response) => {
                        const token = response.data.token
                        localStorage.setItem('token', token)
                        context.commit('RETRIEVE_TOKEN', token)
                        ressolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        }
    }
}