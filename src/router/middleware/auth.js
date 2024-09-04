import Cookies from "js-cookie"
import { store } from "@/store"


const auth = {
    async getAuth () {
        const token = Cookies.get('bearer_token')
        if(token) {
            const isSuccess = await store.dispatch('user/getUserData', token)
            if(!isSuccess) store.commit('user/setLogout')
        } 
    },
    
    checkAuth() {
        return store.state.user.isLogin
    }
}

export default auth