//file: Tugas13b/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../redux/counterSlice";

export const store = configureStore({
    reducer: {
        [counterSlice.name]: counterSlice.reducer,
    },
});
