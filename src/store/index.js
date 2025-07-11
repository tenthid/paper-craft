import { createStore } from "vuex";
import ui from './ui'
import cart from "./cart";
import product from "./product";
import user from "./user";
import brand from "./brand";
import category from "./category";
import order from "./order";

export const store = createStore({
    modules: {
        ui,
        cart,
        product,
        user,
        brand,
        category,
        order
    },
})