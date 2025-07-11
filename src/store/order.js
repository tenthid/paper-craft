import axios from "axios"
import Cookies from "js-cookie"

export default {
    namespaced: true,
    state () {
        return {
            apiUrl: import.meta.env.VITE_API_URL,
            orders: [

            ],
            order: [

            ],
            message: ''
        }
    },

    mutations: {
      setOrdersData(state, payload) {
        state.orders = payload
      },
      setOrderData(state, payload) {
        state.order = payload
      },
      setMessage(state, payload) {
        state.message = payload
      }
    },

    getters: {
      getCartLength: (state) => {
        return state.cart.length
      }
    },

    actions: {
      async getOrders({ state, commit, rootState }) {
        let api = `${state.apiUrl}orders`
        try {
            const { data } = await axios.post(api,{}, {
                headers: {
                    Authorization: `Bearer ${rootState.user.token}`
                }
            })
            if (data.length !== 0) {
                commit('setOrdersData', data)
            } else {
                commit('setOrdersData', [])
            }
            } catch(err) {
                console.log(err)
            }
      },
      async getOrder({ state, commit, rootState }, payload) {
        let api = `${state.apiUrl}order/${payload}`
        try {
          const { data } = await axios.post(api,{}, {
            headers: {
                Authorization: `Bearer ${rootState.user.token}`
            }
          })
          if (data.length !== 0) {
            commit('setOrderData', data)
          } else {
            commit('setOrderData', [])
          }
        } catch(err) {
          console.log(err)
        }
      },

      async makeOrder({state, commit, rootState}, payload) {
        let api = `${state.apiUrl}checkout`
        try {
          const { data } = await axios.post(api, payload, {
            headers: {
                Authorization: `Bearer ${rootState.user.token}`
            }
          })
          commit('setMessage', data.message)
          return true
        } catch(err) {
            console.log(err)
            commit('setMessage', err.response.data.message)
            return false
        }
      }
    }
}