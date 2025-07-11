import axios from "axios"
import Cookies from "js-cookie"

export default {
    namespaced: true,
    state () {
        return {
            apiUrl: import.meta.env.VITE_API_URL,
            cart: [
              
            ],
            checkoutItems: [

            ]
        }
    },

    mutations: {
      changeQty(state, payload) {
        state.cart[payload.id - 1].qty = payload.value
        state.cart[payload.id - 1].total_price = state.cart[payload.id - 1].price * payload.value
      },

      setCartItems(state, payload) {
        state.cart = payload
        for(let item of state.cart) {
          item.selected = true
          item.total_price = item.quantity * item.product.price
        }
      },

      insertCheckoutItems(state, payload) {
        state.checkoutItems = payload
      },
      
      changeSelected(state, payload) {
        for(let item of state.cart) {
          if(item.product.id === payload) {
            item.selected = !item.selected
          }
        }
      },

    },

    getters: {
      getCartLength: (state) => {
        return state.cart.length
      }
    },

    actions: {
      async getCartItems({ state, commit, rootState }, payload) {
        let api = `${state.apiUrl}cart`
        try {
          const { data } = await axios.post(api,{}, {
            headers: {
                Authorization: `Bearer ${rootState.user.token}`
            }
          })
          if (Object.keys(data).length !== 0) {
            commit('setCartItems', data.items)
          } else {
            commit('setCartItems', [])
          }
        } catch(err) {
          console.log(err)
        }
      },
      
      async addItemToCart({state, commit, dispatch, rootState }, payload) {
        let api = `${state.apiUrl}cart/add`
        let token = Cookies.get('bearer_token')
        try {
          if(payload.qty === 0) {
            await dispatch('removeItemCart', payload.id)
          } else {
            const { data } = await axios.post(api, {product_id: payload.id, quantity: payload.qty}, {
              headers: {
                Authorization: `Bearer ${rootState.user.token}`
              }
            })
            commit('setCartItems', data.items)
          }
          return true
        } catch(err) {
          console.log(err)
          return false
        }
      },

      async removeItemCart({ state, commit, rootState }, payload) {
        let api = `${state.apiUrl}cart/${[payload]}`
        try {
          const { data } = await axios.delete(api, {
            headers: {
              Authorization: `Bearer ${rootState.user.token}`
            }
          })
          commit('setCartItems', data.items)
        } catch(err) {
          console.log(err)
        }
      }
    }
}