/* eslint no-underscore-dangle: ["error", { "allow": ["country.countryInfo._id", "_id"] }] */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = `${process.env.REACT_APP_API_URL}/reservations`;

const initialState = {
  reservationList: [],
  status: 'idle',
  error: null,
};

export const fetchReservations = createAsyncThunk('country/fetchReservations', async () => {
  try {
    const response = await axios.get(api);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: { },
  extraReducers(builder) {
    builder.addCase(fetchReservations.pending, (state) => ({
      ...state,
      status: 'loading',
    }))
      .addCase(fetchReservations.fulfilled, (state, action) => ({
        ...state,
        reservationList: action.payload.map((reservation) => ({
          start_end: reservation.start_end,
          end_date: reservation.end_date,
          id: reservation._id,
          city: reservation.city,
        })),
        status: 'loaded',
      }))
      .addCase(fetchReservations.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
  },

});
export default reservationSlice.reducer;