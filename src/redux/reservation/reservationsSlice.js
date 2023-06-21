import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getToken } from 'util/auth';

const initialState = {
  data: [],
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
    return response;
  } catch (error) {
    return error;
  }
});

// Define an async thunk to post a new reservation to the API
export const createReservation = createAsyncThunk(
  'reservations/createReservation',
  async ({ reservation, toast, navigate }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/reservations`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getToken}`,
          },
          body: JSON.stringify(reservation),
        },
      );

      if (response.ok) {
        const data = await response.json();
        toast.success('Tour Booked Successfully');
        navigate('/');
        return data;
      }
      return toast.error('Oops Something went wrong. Try again!');
    } catch (error) {
      return error;
    }
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
        data: action.payload.map((reservation) => ({
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
    builder.addCase(createReservation.fulfilled, (state, action) => {
      state.push(action.payload);
    })
      .addCase(createReservation.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },

});

export default reservationSlice.reducer;
