import { createStore } from "vuex";
import ui from './ui'
import cart from "./cart";
import product from "./product";
import user from "./user";

export const store = createStore({
    modules: {
        ui,
        cart,
        product,
        user
    },
})