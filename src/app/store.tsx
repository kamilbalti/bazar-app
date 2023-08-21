// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './app';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
