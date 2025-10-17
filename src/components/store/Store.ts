
// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import navbarOpen from "./NavbarOpen";
import userReducer from "./DarkMode";

const store = configureStore({
  reducer: {
    user: userReducer,
    navbar: navbarOpen,
  },
});

export type RootState = ReturnType<typeof store.getState>; // 👈 yeh line important
export type AppDispatch = typeof store.dispatch;

export default store;
