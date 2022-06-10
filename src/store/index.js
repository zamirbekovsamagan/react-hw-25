import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./slice/uiSlice";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer
    }
})

export default store