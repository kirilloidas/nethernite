const appModule = {
    state: {
        loader: 0,
        message: ''
    },
    mutations: {
        incrementLoader(state) {
            state.loader++
        },
        decrementLoader(state) {
            state.loader--
        },
        setMessage(state, payload) {
            state.message = payload
        }
    },
    getters: {
        message: state => state.message,
        loader: state => state.loader
    }
}

export default appModule
