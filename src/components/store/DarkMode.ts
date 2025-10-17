// src/redux/slices/userSlice.js
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  name: "",
  isOpen: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SetIsOpen(state) {
      state.isOpen = !state.isOpen; // Toggle logic
    },
  },
});

export const { SetIsOpen } = userSlice.actions;
export default userSlice.reducer;
