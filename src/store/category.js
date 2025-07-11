import axios from "axios"
import Cookies from "js-cookie"

export default {
    namespaced: true,
    state () {
        return {
            apiUrl: `${import.meta.env.VITE_API_URL}categories`,
            categories: [  

            ],
            category: {

            },
            message: '',
            errors: {

            }
        }
    },

    mutations: {
        setCategoriesData(state, payload) {
            state.categories = payload
        },
        setMessage(state, payload) {
            state.message = payload
        },
        setErrorData(state, payload) {
            state.errors = payload
        },
        setCategory(state, payload) {
            state.category = payload
        }
    },

    getters: {

    },

    actions: {
        async getCategories({commit, state}, payload) {
            try{
                const { data } = await axios.get(state.apiUrl)
                commit('setCategoriesData', data.data)
            } catch(err) {
                console.log(err)
                commit('setCategoriesData', [])
            }
        },


        async createCategory({commit, state}, payload) {
            const token = Cookies.get('bearer_token')
            let api = `${state.apiUrl}`
            try {
                const { data } = await axios.post(api, payload, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                commit('setMessage', data.message)
                commit('setErrorData', {})
                return true
            } catch (err) {
                console.log(err)
                err.response.data.errors? commit('setErrorData', err.response.data.errors) : commit('setErrorData', {})
                commit('setMessage', err.response.data.message)
                return false
            }
        },

        async updateCategory({commit, state}, payload) {
            const token = Cookies.get('bearer_token')
            let api = `${state.apiUrl}/${payload.id}`
            try {
                const { data } = await axios.put(api, payload, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                commit('setMessage', data.message)
                commit('setErrorData', {})
                return true
            } catch (err) {
                console.log(err)
                err.response.data.errors? commit('setErrorData', err.response.data.errors) : commit('setErrorData', {})
                commit('setMessage', err.response.data.message)
                return false
            }
        },

        async getCategory({state, commit}, payload) {
            let api = `${state.apiUrl}/${payload}`
            try {
                const { data } = await axios.get(api)
                commit('setCategory', data)
            } catch(err) {
                console.log(err)
            }
        },

        async deleteCategory({commit, state}, payload) {
            const token = Cookies.get('bearer_token')
            let api = `${state.apiUrl}/${payload}`
            try {
                const { data } = await axios.delete(api, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                commit('setMessage', data.message)
                commit('setErrorData', {})
                return true
            } catch (err) {
                console.log(err)
                commit('setMessage', err.response.data.message)
                return false
            }
        },
    }
}