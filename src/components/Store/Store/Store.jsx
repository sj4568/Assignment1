import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../Slices/Slices";

const store = configureStore({
    reducer:UserSlice.reducer
})

export default store