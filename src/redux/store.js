import { configureStore } from '@reduxjs/toolkit';
import ToursSlice from './tours/tours';
import PTSlice from './tours/toursPost';

const store = configureStore({
  reducer: {
    tours: ToursSlice,
    postTours: PTSlice,
  },
});

export default store;
