export default {
    namespaced: true,
    state () {
        return {
            cart: [
                {
                  id: 1,
                  name: "This Product name bla bla ba ball",
                  brand: "Brand name",
                  category: "category name",
                  price: 200000,
                  stock: 11,
                  image: "/images/tas.jpg",
                  packaging: 5000,
                  qty: 1,
                },
                {
                  id: 2,
                  name: "This Product name bla bla ba ball",
                  brand: "Brand name",
                  category: "category name",
                  price: 200000,
                  stock: 11,
                  image: "/images/tas.jpg",
                  packaging: 5000,
                  qty: 1,
                },
                {
                  id: 3,
                  name: "This Product name bla bla ba ball",
                  brand: "Brand name",
                  category: "category name",
                  price: 200000,
                  stock: 11,
                  image: "/images/tas.jpg",
                  packaging: 5000,
                  qty: 1,
                },
            ],
            checkoutItems: [

            ]
        }
    },

    mutations: {
      changeQty(state, payload) {
        state.cart[payload.id - 1].qty = payload.value
        state.cart[payload.id - 1].totalPrice = state.cart[payload.id - 1].price * payload.value
      },

      setCartItems(state, payload) {
        state.cart = payload
      },

      insertCheckoutItems(state, payload) {
        console.log(payload)
        state.checkoutItems = payload
      },
      
      changeSelected(state, payload) {
        console.log('jalan')
        for(let item of state.cart) {
          if(item.id === payload) {
            item.selected = !item.selected
          }
        }
      },

    },

    getters: {

    },

    actions: {
      getCartItems({ state, commit }, payload) {
        let cart = state.cart
        for(let item of cart) {
          item.selected = true
          item.totalPrice = item.qty * item.price
        }

        commit('setCartItems', cart)
      },

      qtyControll({ commit, dispatch }, payload) {
        commit('changeQty', payload)
      },

      removeItem({ state }, payload) {
        let cartItems = state.cart

      }
    }
}