import Cookies from "js-cookie"
import { store } from "@/store"


const auth = {
    async checkAuth () {
        const token = Cookies.get('bearer_token')
        const isSuccess = await store.dispatch('user/getUserData', token)
        
        if(isSuccess) {
            return true
        } else {
            store.commit('user/setLogout')
            return false
        }
    }
}

export default auth