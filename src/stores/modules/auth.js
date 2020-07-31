export default {
    state: {
        userId: {},
        token: {}
    },
    getter: {
        userId: state => state.userId,
        token: state => state.token
    },
    mutations: {
        SET_USER_ID: (state, userId) => {
            state.userId = userId
        },
        SET_TOKEN: (state, token) => {
            state.token = token
        }
    },
    actions: {
        LOGIN: ({ commit, dispatch }, userId) => {
            if(!window.$cookies.get('userId')) {
                commit(SET_USER_ID, userId)
            }
        }
    }
}