import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../feature/counter";

export const store = configureStore({
    reducer: {
        counter:counterSlice.reducer
    }
})