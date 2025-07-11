import axios from "axios"
import Cookies from "js-cookie"

export default {
    namespaced: true,
    state () {
        return {
            apiUrl: import.meta.env.VITE_API_URL,

            pagination: {

            },

            products: [

            ],

            newestProducts: [

            ],

            popularProducts: [

            ],

            product: {
              
            },
            message: '',
            errors: {

            }
        }
    },

    mutations: {
      setProductsData(state, payload) {
        state.products = payload
      },

      setPaginationData(state, payload) {
        state.pagination = payload
      },

      setProductDetailData(state, payload) {
        state.product = payload
      },

      setNewestProductsData(state, payload) {
        state.newestProducts = payload
      },

      setPopularProductsData(state, payload) {
        state.popularProducts = payload
      },
      setMessage(state, payload) {
        state.message = payload
      },
      setErrorData(state, payload) {
        state.errors = payload
      },
    },

    getters: {
      formatToIdr: () => (price) => {
        return Number(price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0, minimumFractionDigits: 0 })
      },
      productsLength: (state) => {
        return state.products.length
      }
    },

    actions: {
      async getProducts ({commit, state, rootState}, payload) {
        const token = Cookies.get('bearer_token')
        let api = token? `${state.apiUrl}user/products` : `${state.apiUrl}products`
        try {
          let queries = payload !== undefined && payload !== null? payload : {}
          if(Object.keys(queries).length !== 0) {
            api = `${api}?${payload}`
            console.log(api)
          }
          
          const getData = async () => {
            if(rootState.user.isLogin) return await axios.post(api, {}, {
              headers: {
                Authorization: ` Bearer ${token}`
              }
            })
            return await axios.get(api)
          }

          const { data } = await getData()
          commit('setProductsData', data.data)
          let pagination = {...data}
          delete pagination.data
          commit('setPaginationData', pagination)
        } catch(err) {
          console.log(err)
          commit('setProductsData', [])
          commit('setPaginationData', {})
        }
      },

      async getProductDetail({state, commit, rootState}, payload) {
        const token = Cookies.get('bearer_token')
        const api = token? `${state.apiUrl}user/products/${payload}` : `${state.apiUrl}products/${payload}`
        try {
          const getData = async () => {
            if(rootState.user.isLogin) return await axios.post(api, {}, {
              headers: {
                Authorization: ` Bearer ${token}`
              }
            })
            return await axios.get(api)
          }

          const { data } = await getData()
          commit('setProductDetailData', data[0])
        } catch(err) {
          console.log(err)
          commit('setProductDetailData', {})
        }
      },

      async getNewest({state, commit, rootState}) {
        try{
          const getData = async () => {
            const token = Cookies.get('bearer_token')
            if(rootState.user.isLogin) return await axios.post(`${state.apiUrl}user/products?orderBy=created_at&sortBy=desc&perPage=5`, {}, {
              headers: {
                Authorization: ` Bearer ${token}`
              }
            })
            return await axios.get(`${state.apiUrl}products?orderBy=created_at&sortBy=desc&perPage=5`)
          }

          const { data } = await getData()
          commit('setNewestProductsData', data.data)
        } catch(err) {
          console.log(err)
          commit('setNewestProductsData', [])
        }
      },

      async getPopular({state, commit, rootState}) {
        try{
          const getData = async () => {
            const token = Cookies.get('bearer_token')
            if(rootState.user.isLogin) return await axios.post(`${state.apiUrl}user/products?orderBy=liked_by_users_count&sortBy=desc&perPage=5`, {}, {
              headers: {
                Authorization: ` Bearer ${token}`
              }
            })
            return await axios.get(`${state.apiUrl}products?orderBy=liked_by_users_count&sortBy=desc&perPage=5`)
          }

          const { data } = await getData()
          commit('setPopularProductsData', data.data)
        } catch(err) {
          console.log(err)
          commit('setPopularProductsData', [])
        }
      },

      async deleteProduct({commit, state}, payload) {
        const token = Cookies.get('bearer_token')
        let api = `${state.apiUrl}products/${payload}`
        try {
          const { data } = await axios.delete(api, {
            headers: {
                Authorization: `Bearer ${token}`
            }
          })
          commit('setMessage', data.message)
          return true
        } catch(err) {
          console.log(err)
          err.response.data.errors? commit('setErrorData', err.response.data.errors) : commit('setErrorData', {})
          commit('setMessage', err.response.data.message)
          return false
        }
      },

      async uploadProductImage({state, commit}, payload) {
        const token = Cookies.get('bearer_token')
        let api = `${state.apiUrl}products/upload`
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

      async createProduct({state, commit}, payload) {
        const token = Cookies.get('bearer_token')
        let api = `${state.apiUrl}products`
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

      async updateProduct({state, commit}, payload) {
        const token = Cookies.get('bearer_token')
        let api = `${state.apiUrl}products/${payload.id}`
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
    }
}