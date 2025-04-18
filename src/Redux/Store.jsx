import { configureStore } from "@reduxjs/toolkit";
import ShoppingcartReducer from "./Slices/ShoppingcartSlice";

export const store = configureStore({
    reducer : {
        DisplayShopItem: ShoppingcartReducer,
    }
})