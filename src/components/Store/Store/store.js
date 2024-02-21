import { configureStore } from "@reduxjs/toolkit";
import MimSuper from "../Slices/StoreSlice";

const Store = configureStore({
    reducer:MimSuper
})

export default Store