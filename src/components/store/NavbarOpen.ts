// store/NavbarOpen.ts
import { createSlice } from "@reduxjs/toolkit";

// 👇 Step 1: Define type of the state
interface NavbarState {
  navOpen: boolean;
}

// 👇 Step 2: Use that type in your initialState
const initialState: NavbarState = {
  navOpen: false,
};

// 👇 Step 3: Create slice with typed state
const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setMenuOpen: (state) => {
      state.navOpen = !state.navOpen;
    },
  },
});

export const { setMenuOpen } = navbarSlice.actions;
export default navbarSlice.reducer;
