import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import herosSlice from './HomeReducer/HomeReducer';

const store = configureStore({
  reducer: {
    heros: herosSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
