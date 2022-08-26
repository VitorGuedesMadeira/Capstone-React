import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    rockets: 'guedes',
    missions: 'madeira',
  },
});

export default store;
