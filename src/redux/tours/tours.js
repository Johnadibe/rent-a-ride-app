/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getToken } from 'util/auth';

export const fetchTours = createAsyncThunk('tours/fetchTours', async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/tours`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
});

export const deleteTour = createAsyncThunk(
  'tours/deleteTour',
  async (tourId) => {
    await fetch(`${process.env.REACT_APP_API_URL}/tours/${tourId}`, {
      method: 'PATCH',
      body: JSON.stringify({ status: true }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken}`,
      },
    });
    return tourId;
  },
);

const ToursSlice = createSlice({
  name: 'tours',
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTours.fulfilled, (state, action) => ({
        ...state,
        data: action.payload,
      }))
      // .addCase(deleteTour.fulfilled, (state, action) => {
      //   state.data = state.data.filter((tour) => tour.id !== action.payload);
      // });

    // .addCase(deleteTour.fulfilled, (state, action) => {
    //   const deletedTourId = action.payload;
    //   // Update the status of the deleted tour in the Redux store
    //   state.data = state.data.map((tour) => {
    //     if (tour.id === deletedTourId) {
    //       return {
    //         ...tour,
    //         status: true,
    //       };
    //     }
    //     return tour;
    //   });
    // });

      .addCase(deleteTour.fulfilled, (state, action) => {
        const itemId = action.payload;
        // Find the item by its ID and update its status to removed
        const item = state.data.find((item) => item.id === itemId);
        if (item) {
          item.removed = true;
        }
      });
  },
});

export default ToursSlice.reducer;
