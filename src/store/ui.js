export default {
    namespaced: true,
    state () {
        return {
            akuAdalah: 'manusia',
            dropdownVisible: false,
            notif: {
                topPos: 0,
                isError: false,
                notifMessage: '',
                notifTimeout: null
            },
        }
    },

    getters: {

    },

    mutations: {
        ubahAkuAdalah(state, payload) {
            state.akuAdalah = payload
            console.log(state.akuAdalah)
        },

        setNotif(state, payload) {
            state.notif.notifMessage = payload.message;
            state.notif.isError = payload.isError;
            state.notif.topPos = 65;
        },

        hideNotif(state) {
            state.notif.topPos = 0;
        },

        setNotifTimeout(state, payload) {
            state.notif.notifTimeout = payload;
        }
    },

    actions: {
        ubah({commit}, payload) {
            try {
                commit('ubahAkuAdalah',  payload)
            } catch(err) {
                console.log(err)
            }
        },
        showNotif({ commit, state }, payload) {
            if (state.notif.notifTimeout) {
              clearTimeout(state.notif.notifTimeout);
            }
        
            commit('setNotif', payload);
        
            const timeout = setTimeout(() => {
              commit('hideNotif');
            }, 1500);
        
            commit('setNotifTimeout', timeout);
        }
    }
}