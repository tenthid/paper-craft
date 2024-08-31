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

            },
            message: ''
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
            state.token = payload.token
            if(payload.cookies) Cookies.set('bearer_token', payload.token)
        },
        setLogout(state) {
            state.userData = {}
            state.isLogin = false
            state.token = ''
            Cookies.remove('bearer_token')
        },
        setMessage(state, payload) {
            state.message = payload
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
                commit('setToken', {token: data.token, cookies: true})
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
                commit('setToken', {token: Cookies.get('bearer_token')})
                commit('setLogin', data)
                return true
            } catch(err) {
                console.log(err)
                err.response.data.errors? commit('setErrorData', err.response.data.errors) : commit('setErrorData', {})
                return false
            }
            
        },
        
        async getPassResetToken({commit, state}, payload) {
            let api = `${state.apiUrl}forgot-password`
            try {   
                const { data } = await axios.post(api, payload)
                commit('setErrorData', {})
                commit('setMessage', data.message)
                return true
            } catch (err) {
                console.log(err)
                err.response.data.errors? commit('setErrorData', err.response.data.errors) : commit('setErrorData', {})
                commit('setMessage', err.response.data.message)
                return false
            }
        },

        async resetPassword({commit, state}, payload) {
            let api = `${state.apiUrl}reset-password`
            try {   
                const { data } = await axios.post(api, payload)
                commit('setErrorData', {})
                console.log(data)
                commit('setMessage', data.message)
                return true
            } catch (err) {
                console.log(err)
                err.response.data.errors? commit('setErrorData', err.response.data.errors) : commit('setErrorData', {})
                commit('setMessage', err.response.data.message)
                return false
            }
        }
    }
}