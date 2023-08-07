import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slice";

const store = configureStore({
  reducer: {
    menuItem: menuReducer,
  },
});
export default store;