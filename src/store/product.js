import axios from "axios"

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

            brands: [

            ],

            categories: [  

            ]
        }
    },

    mutations: {
      setProductsData(state, payload) {
        state.products = payload
      },

      setPaginationData(state, payload) {
        state.pagination = payload
      },

      setBrandsData(state, payload) {
        state.brands = payload
      },

      setCategoriesData(state, payload) {
        state.categories = payload
      },

      setProductDetailData(state, payload) {
        state.product = payload
      },

      setNewestProductsData(state, payload) {
        state.newestProducts = payload
      },

      setPopularProductsData(state, payload) {
        state.popularProducts = payload
      }
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
      async getProducts ({commit, state}, payload) {
        try {
          let api = `${state.apiUrl}products`
          let queries = payload !== undefined && payload !== null? payload : {}
          if(Object.keys(queries).length !== 0) {
            api = `${api}?${payload}`    
            console.log(api)
          }
          const { data } = await axios.get(api)
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

      async getBrands({commit, state}, payload) {
        try{
          let api = `${state.apiUrl}brands`
          const { data } = await axios.get(api)
          commit('setBrandsData', data.data)
        } catch(err) {
          console.log(err)
          commit('setBrandsData', [])
        }
      },

      async getCategories({commit, state}, payload) {
        try{
          let api = `${state.apiUrl}categories`
          const { data } = await axios.get(api)
          commit('setCategoriesData', data.data)
        } catch(err) {
          console.log(err)
          commit('setCategoriesData', [])
        }
      },

      async getProductDetail({state, commit}, payload) {
        try {
          let api = `${state.apiUrl}products/${payload}`
          const { data } = await axios.get(api)
          commit('setProductDetailData', data.product[0])
        } catch(err) {
          console.log(err)
          commit('setProductDetailData', {})
        }
      },

      async getNewest({state, commit}) {
        try{
          let api = `${state.apiUrl}products?orderBy=created_at&sortBy=desc&perPage=5`
          const { data } = await axios.get(api)
          commit('setNewestProductsData', data.data)
        } catch(err) {
          console.log(err)
          commit('setNewestProductsData', [])
        }
      },

      async getPopular({state, commit}) {
        try{
          let api = `${state.apiUrl}products?orderBy=created_at&sortBy=desc&perPage=5`
          const { data } = await axios.get(api)
          commit('setPopularProductsData', data.data)
        } catch(err) {
          console.log(err)
          commit('setPopularProductsData', [])
        }
      },


    }
}