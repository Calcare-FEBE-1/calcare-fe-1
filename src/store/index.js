import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import foodsReducer from "./makananSlice";

const store = configureStore({
  reducer: {
    foods: foodsReducer,
    cart: cartReducer,
    // carts: cartTestReducer,
  },
});

export default store;
