export default {
    namespaced: true,
    state () {
        return {
            akuAdalah: 'manusia'
        }
    },

    getters: {

    },

    mutations: {
        ubahAkuAdalah(state, payload) {
            state.akuAdalah = payload
            console.log(state.akuAdalah)
        }
    },

    actions: {
        ubah({commit}, payload) {
            try {
                commit('ubahAkuAdalah',  payload)
            } catch(err) {
                console.log(err)
            }
        }
    }
}