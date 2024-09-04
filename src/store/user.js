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
            likedProducts: [

            ],
            pagination: {

            },
            message: ''
        }
    },

    mutations: {
        setLogin(state, payload) {
            state.userData = payload.user,
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
        },
        setLikedProductsData(state, payload) {
            state.likedProducts = payload
        },
        setPaginationData(state, payload) {
            state.pagination = payload
        },
        setUserData(state, payload) {
            state.userData = payload
        }
    },

    getters: {
        getLikeLength: (state) => {
            return state.likedProducts.length
        }
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

        async uploadProfileImage({state, commit}, payload) {
            const token = Cookies.get('bearer_token')
            let api = `${state.apiUrl}user/upload`
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
        
        async updateUser({state, commit}, payload) {
            const token = Cookies.get('bearer_token')
            let api = `${state.apiUrl}user/update`
            try {
                const { data } = await axios.put(api, payload, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                commit('setUserData', data.user)
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

        async changePassword({state, commit}, payload) {
            let api = `${state.apiUrl}user/change-password`
            const token = Cookies.get('bearer_token')
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
        },

        async getUserLike({commit, state}, payload) {
            let api = `${state.apiUrl}user/like`
            const token = Cookies.get('bearer_token')
            let queries = payload !== undefined && payload !== null? payload : {}
            if(Object.keys(queries).length !== 0) {
              api = `${api}?${payload}`
              console.log(api)
            }
            try {
                const { data } = await axios.post(api, {}, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                let pagination = {...data}
                delete pagination.data
                commit('setLikedProductsData', data.data)
                commit('setPaginationData', pagination)
            } catch(err) {
                console.log(err)
            }
        },

        async likeControll({state}, payload) {
            let api = `${state.apiUrl}user/like/${payload}`
            const token = Cookies.get('bearer_token')
            try {
                await axios.post(api, {}, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            } catch(err) {
                console.log(err)
            }
        }
    }
}