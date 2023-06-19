import { configureStore } from '@reduxjs/toolkit';
import ToursSlice from './tours/tours';

const store = configureStore({
  reducer: {
    tours: ToursSlice,
  },
});

export default store;
