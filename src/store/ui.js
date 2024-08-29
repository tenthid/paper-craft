export default {
    namespaced: true,
    state () {
        return {
            akuAdalah: 'manusia',
            dropdownVisible: false,
            notif: {
                topPos: -100,
                isError: false,
                notifMessage: '',
                notifTimeout: null
            },
            modal: {
                modalVisible: false,
                bottomPos: -100,
                type: ''
            }
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
            
            if(payload.topPos !== undefined && payload.topPos !== null) {
                state.notif.topPos = payload.topPos;
            } else {
                state.notif.topPos = 65;
            }
        },

        hideNotif(state) {
            state.notif.topPos = -100;
        },

        setNotifTimeout(state, payload) {
            state.notif.notifTimeout = payload;
        },
        
        toggleModal(state, payload) {
            state.modal.modalVisible = !state.modal.modalVisible
            
            if(state.modal.bottomPos < 0) {
                state.modal.type = payload.type
                state.modal.bottomPos = 0
                document.documentElement.style.overflow = 'hidden'
            } else {
                state.modal.bottomPos = -100
                document.documentElement.style.overflow = 'auto'
            }
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
            }, 1800);
        
            commit('setNotifTimeout', timeout);
        },

        async showModal({commit, dispatch, state} , payload) {
            if(!state.modal.modalVisible) {
                await dispatch('product/getProductDetail', payload.id, { root: true })
            }
            commit('toggleModal', payload)
        }
    }
}