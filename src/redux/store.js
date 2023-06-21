import { configureStore } from '@reduxjs/toolkit';
import { reservationSlice } from './reservation/reservationsSlice';
import ToursSlice from './tours/tours';

const store = configureStore({
  reducer: {
    tours: ToursSlice,
    reservations: reservationSlice
  },
});

export default store;
