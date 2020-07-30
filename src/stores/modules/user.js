export default {
    state: {},
    getter: {},
    mutations: {},
    actions: {
        LOGIN: ({ commit }, payload) => {
            return new Promise(async (ressolve, reject) => {
                await axios.post(`/user/login`, payload)
                    .then(({ data, status }) => {
                        if (status === 200) {
                            ressolve(true)
                        }
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        }
    }
}