import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import reservationReducer from './reservationSlice';
import ToursSlice from './tours/tours';

const logger = createLogger({
  // Options for the logger can be passed here
  // Show only the actions in the console
  predicate: (getState, action) => action.type !== 'SOME_ACTION',
  // Collapse the logs by default
  collapsed: true,
});

export const store = configureStore({
  reducer: {
    reservations: reservationReducer,
    tours: ToursSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
