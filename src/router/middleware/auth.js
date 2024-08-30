import Cookies from "js-cookie"
import { store } from "@/store"

const token = Cookies.get('bearer_token')

const auth = {
    async checkAuth () {
        if(token) {
            const isSuccess = await store.dispatch('user/getUserData', token)
            
            if(isSuccess) {
                return true
            } else {
                store.commit('user/setLogout')
                return false
            }
        }
        
    }
}

export default auth