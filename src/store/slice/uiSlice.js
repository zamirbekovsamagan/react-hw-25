import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isLoggedIn: false
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    showLoading(state) {
      state.isLoading = !state.isLoading;
    },
    login(state){
      state.isLoggedIn = true
    },
    logout(state){
      state.isLoggedIn = false
    }
  },
});

export const uiActions = uiSlice.actions
export default uiSlice
