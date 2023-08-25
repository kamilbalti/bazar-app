// store.js
import { configureStore } from '@reduxjs/toolkit';
import bazarReducer from "../Redux-Toolkit/BazarSlice"

const store = configureStore({
  reducer: bazarReducer,
});

export default store;
