import { createStore } from "vuex";
import ui from './ui'
import cart from "./cart";
import product from "./product";
import user from "./user";
import brand from "./brand";
import category from "./category";

export const store = createStore({
    modules: {
        ui,
        cart,
        product,
        user,
        brand,
        category
    },
})