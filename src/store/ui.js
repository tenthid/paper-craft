export default {
    namespaced: true,
    state () {
        return {
            akuAdalah: 'manusia',
            dropdownVisible: false
        }
    },

    getters: {

    },

    mutations: {
        ubahAkuAdalah(state, payload) {
            state.akuAdalah = payload
            console.log(state.akuAdalah)
        },
        changeDropdownVisibility(state, payload) {
            state.dropdownVisible = payload
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