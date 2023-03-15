import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Feature/counterSlice"

export const store = configureStore({
    reducer:{
        counter: counterSlice
    }
})