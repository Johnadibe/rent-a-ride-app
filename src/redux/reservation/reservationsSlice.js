import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getToken } from 'util/auth';

const initialState = {
  reservationList: [],
  status: 'idle',
  error: null,
};

export const fetchReservations = createAsyncThunk('reservations/fetchReservations', async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/reservations`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.message;
  }
});

// Define an async thunk to post a new reservation to the API
export const createReservation = createAsyncThunk(
  'reservations/createReservation',
  async (reservationData) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/reservations`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken}`,
        },
        body: JSON.stringify(reservationData),
      },
    );
    const data = await response.json();
    return data;
  },
);

export const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
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
          id: reservation.id,
        })),
        status: 'loaded',
      }))
      .addCase(fetchReservations.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
    // Handle the postReservation fulfilled action
    builder.addCase(postReservation.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },

});

export default reservationSlice.reducer;
