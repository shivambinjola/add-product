import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productslice.ts";

export const store = configureStore({
  reducer: productReducer,
});

export default store;
