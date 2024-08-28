import axios from "axios"
import Cookies from "js-cookie"

export default {
    namespaced: true,
    state () {
        return {
            apiUrl: import.meta.env.VITE_API_URL,
            isLogin: false,
            token: '',
            userData: {
                
            },
            errors: {

            }
        }
    },

    mutations: {
        setLogin(state, payload) {
            state.userData = payload,
            state.isLogin = true
        },
        setErrorData(state, payload) {
            state.errors = payload
        },
        setToken(state, payload) {
            state.token = payload
            Cookies.set('bearer_token', payload)
        },
        setLogout(state) {
            state.userData = {}
            state.isLogin = false
            Cookies.remove('bearer_token')
        }
    },

    getters: {

    },

    actions: {
        async register({commit, state}, payload) {
            let api = `${state.apiUrl}register`
            try {
                const { data } = await axios.post(api, payload)
                commit('setErrorData', {})
                return true
            } catch(err) {
                console.log(err)
                err.response.data.errors? commit('setErrorData', err.response.data.errors) : commit('setErrorData', {})
                return false
            }
        },
        
        async login({commit, state, dispatch}, payload) {
            let api = `${state.apiUrl}login`
            try {
                const { data } = await axios.post(api, payload)
                commit('setToken', data.token)
                await dispatch('getUserData', data.token)
                commit('setErrorData', {})
                return true
            } catch(err) {
                console.log(err)
                err.response.data.errors? commit('setErrorData', err.response.data.errors) : commit('setErrorData', {})
                return false
            }
        },
        
        async getUserData({commit, state}, payload) {
            let api = `${state.apiUrl}user`
            try {
                const { data } = await axios.post(api,{}, {
                    headers: {
                        Authorization: `Bearer ${payload}`
                    }
                })
                commit('setErrorData', {})
                commit('setLogin', data)
                return true
            } catch(err) {
                console.log(err)
                err.response.data.errors? commit('setErrorData', err.response.data.errors) : commit('setErrorData', {})
                return false
            }
            
        }
    }
}