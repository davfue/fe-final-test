import { createStore } from "vuex";
import product from "@/store/product.js";
import auth from "@/store/auth.js";

export const store = createStore({
  modules: {
    product,
    auth
  },
})