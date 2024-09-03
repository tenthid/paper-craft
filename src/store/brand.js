import axios from "axios"
import Cookies from "js-cookie"

export default {
    namespaced: true,
    state () {
        return {
            apiUrl: `${import.meta.env.VITE_API_URL}brands`,
            brands: [

            ],
        }
    },

    mutations: {
      setBrandsData(state, payload) {
        state.brands = payload
      },
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
    }
}