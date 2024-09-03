import axios from "axios"
import Cookies from "js-cookie"

export default {
    namespaced: true,
    state () {
        return {
            apiUrl: `${import.meta.env.VITE_API_URL}categories`,
            categories: [  

            ]
        }
    },

    mutations: {
    setCategoriesData(state, payload) {
        state.categories = payload
        },
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
    }
}