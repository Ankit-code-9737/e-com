// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import rootReducer from "../components/reducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },

  rootReducer: {
    createStore: rootReducer,
  },
});
