import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'http://127.0.0.1:3000/api/v1/reservations/random.json'; // Update the URL to match the correct endpoint

export const fetchReservation = createAsyncThunk(
  'reservation/fetchReservation',
  async () => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },
);

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: { data: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReservation.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default reservationSlice.reducer; // Export the reducer instead of the entire slice
