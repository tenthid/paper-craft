import { createStore } from "vuex";
import ui from './ui'
import product from "./product";
import cart from "./cart";
import user from "./user";

export const store = createStore({
    modules: {
        ui,
        product,
        cart,
        user,
    }
})