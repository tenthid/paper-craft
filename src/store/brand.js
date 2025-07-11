import axios from "axios"
import Cookies from "js-cookie"

export default {
    namespaced: true,
    state () {
        return {
            apiUrl: `${import.meta.env.VITE_API_URL}brands`,
            brands: [  

            ],
            brand: {

            },
            message: '',
            errors: {

            }
        }
    },

    mutations: {
        setBrandsData(state, payload) {
            state.brands = payload
        },
        setMessage(state, payload) {
            state.message = payload
        },
        setErrorData(state, payload) {
            state.errors = payload
        },
        setBrand(state, payload) {
            state.brand = payload
        }
    },

    getters: {

    },

    actions: {
        async getBrands({commit, state}, payload) {
            try{
                const { data } = await axios.get(state.apiUrl)
                commit('setBrandsData', data.data)
            } catch(err) {
                console.log(err)
                commit('setBrandsData', [])
            }
        },


        async createBrand({commit, state}, payload) {
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

        async updateBrand({commit, state}, payload) {
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

        async getBrand({state, commit}, payload) {
            let api = `${state.apiUrl}/${payload}`
            try {
                const { data } = await axios.get(api)
                commit('setBrand', data)
            } catch(err) {
                console.log(err)
            }
        },

        async deleteBrand({commit, state}, payload) {
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

        async uploadBrandImage({state, commit}, payload) {
            const token = Cookies.get('bearer_token')
            let api = `${state.apiUrl}/upload`
            const formData = new FormData()
            formData.append('image', payload)
            try {
                const { data } = await axios.post(api, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                return { status: true, path: data.image_path}
            } catch(err) {
                console.log(err)
                err.response.data.errors? commit('setErrorData', err.response.data.errors) : commit('setErrorData', {})
                commit('setMessage', err.response.data.message)
                return false
            }
          },
    }
}